import { Marca } from './../../../_model/marca';
import { ProveedorinsumoService } from 'src/app/_service/proveedorinsumo.service';
import { MarcaService } from './../../../_service/marca.service';
import { InsumoService } from './../../../_service/insumo.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , FormBuilder  } from '@angular/forms';
import { Observable } from 'rxjs';
import { Proveedorinsumo } from 'src/app/_model/proveedorinsumo';

@Component({
  selector: 'app-insumo-edicion',
  templateUrl: './insumo-edicion.component.html',
  styleUrls: ['./insumo-edicion.component.css']
})
export class InsumoEdicionComponent implements OnInit {

  marcas:Marca[]=[];
  proveedorinsumos:Proveedorinsumo[]=[];
  idMarcaSeleccionado: number;
  idProveedorInsumoSeleccionado: number;
  form :FormGroup;
  myControlMarca: FormControl = new FormControl();
  myControlProveedorInsumo: FormControl = new FormControl();

  filteredOptions: Observable<any[]>;
  filteredOptionsMedico: Observable<any[]>;

  constructor(private builder: FormBuilder,private insumoService:InsumoService ,private proveedorinsumoService:ProveedorinsumoService, private marcaService:MarcaService) { }

  ngOnInit() {
 
/*
    this.form = this.builder.group({
      'marca': this.myControlMarca,
      //'especialidad': new FormControl(),
      'proveedorinsumo': this.myControlProveedorInsumo
      //'diagnostico': new FormControl(''),
      //'tratamiento': new FormControl('')
    });
*/

   this.listarMarcas();
   this.listarProveedorInsumos();


  }

operar(){
  
}


  listarMarcas(){
    this.marcaService.listar().subscribe(data=>{
      this.marcas = data;
    })
  }

  listarProveedorInsumos(){
    this.proveedorinsumoService.listar().subscribe(data=>{
      this.proveedorinsumos = data;
    })
  }

}
