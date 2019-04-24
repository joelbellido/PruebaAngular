import { Marca } from './../../../_model/marca';
import { ProveedorinsumoService } from 'src/app/_service/proveedorinsumo.service';
import { MarcaService } from './../../../_service/marca.service';
import { InsumoService } from './../../../_service/insumo.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , FormBuilder  } from '@angular/forms';
import { Observable } from 'rxjs';
import { Proveedorinsumo } from 'src/app/_model/proveedorinsumo';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-insumo-edicion',
  templateUrl: './insumo-edicion.component.html',
  styleUrls: ['./insumo-edicion.component.css']
})
export class InsumoEdicionComponent implements OnInit {

  marcas:Marca[]=[];
  proveedorinsumos:Proveedorinsumo[]=[];
  
  form :FormGroup;
 

  constructor(private builder: FormBuilder,private insumoService:InsumoService ,private proveedorinsumoService:ProveedorinsumoService, private marcaService:MarcaService) { }

  ngOnInit() {
 
    this.form = this.builder.group({
      'nombre': new FormControl(''),
      'marca': new FormControl(),
      'proveedorInsumo': new FormControl(),
      'descripcion': new FormControl('')
    });

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
