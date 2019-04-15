import { TipoproductoDialogoComponent } from './tipoproducto-dialogo/tipoproducto-dialogo.component';
import { TipoproductoService } from './../../_service/tipoproducto.service';
import { MatPaginator, MatSort, MatSnackBar, MatDialog } from '@angular/material';
import { MatTableDataSource } from '@angular/material';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Tipoproducto } from 'src/app/_model/tipoproducto';

@Component({
  selector: 'app-tipoproducto',
  templateUrl: './tipoproducto.component.html',
  styleUrls: ['./tipoproducto.component.css']
})
export class TipoproductoComponent implements OnInit {


  displayedColumns =['idTipoProducto','nombre','acciones'];
  dataSource: MatTableDataSource<Tipoproducto>;
  @ViewChild(MatPaginator) paginator : MatPaginator;
  @ViewChild(MatSort)sort:MatSort; 

  constructor(private tipoproductoService : TipoproductoService , private snackBar: MatSnackBar , private dialog: MatDialog) { }

  ngOnInit() {
    this.tipoproductoService.tipoProductosCambio.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

    this.tipoproductoService.mensajeCambio.subscribe(data=> {
      this.snackBar.open(data,'Aviso',{duration:2000});
    });

    this.tipoproductoService.listar().subscribe(data => {
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
    });
  }

  openDialog(tipoproducto?:Tipoproducto){
    let med = tipoproducto != null ? tipoproducto :new Tipoproducto();
    this.dialog.open(TipoproductoDialogoComponent, {
      width:'250px',
      data:med
    });
  }



  filter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  
  eliminar(tipoproducto:Tipoproducto){
      this.tipoproductoService.eliminar(tipoproducto.idTipoProducto).subscribe(data => {
        this.tipoproductoService.listar().subscribe(tipoProducto => {
          this.tipoproductoService.tipoProductosCambio.next(tipoProducto);
          this.tipoproductoService.mensajeCambio.next("Se elimino");
        });

    });
  }
}
