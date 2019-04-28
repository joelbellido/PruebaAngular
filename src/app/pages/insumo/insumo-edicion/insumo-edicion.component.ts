
import { Marca } from './../../../_model/marca';
import { ProveedorinsumoService } from 'src/app/_service/proveedorinsumo.service';
import { MarcaService } from './../../../_service/marca.service';
import { InsumoService } from './../../../_service/insumo.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Insumo } from 'src/app/_model/insumo';
import { Proveedorinsumo } from 'src/app/_model/proveedorinsumo';


@Component({
  selector: 'app-insumo-edicion',
  templateUrl: './insumo-edicion.component.html',
  styleUrls: ['./insumo-edicion.component.css']
})
export class InsumoEdicionComponent implements OnInit {

  insumo: Insumo;
  marcas: Marca[] = [];
  proveedorinsumos: Proveedorinsumo [] = [];
  idMarcaSeleccionada: number;
  idProveedorInsumoSeleccionada: number;
  form: FormGroup;
  edicion: boolean;
  id: number;



  constructor(private builder: FormBuilder, private insumoService: InsumoService, private proveedorinsumoService: ProveedorinsumoService, private marcaService: MarcaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.form = this.builder.group({
      'id': new FormControl(0),
      'nombre': new FormControl(''),
      'marca': new FormControl(),
      'proveedorInsumo': new FormControl(),
      'descripcion': new FormControl('')
    });

    this.listarMarcas();
    this.listarProveedorInsumos();

    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.edicion = this.id != null;
      this.initForm();
    });
  }
  initForm() {

    if (this.edicion) {
      //cargar la data del servicio hacia el form
      this.insumoService.listarPorId(this.id).subscribe(data => {
        this.form = this.builder.group({
          'id': new FormControl(data.idInsumo),
          'nombre': new FormControl(data.nombre),
          //'marca': new FormControl(data.marca),
          'marca': new FormControl(data.marca.nombre),
          'proveedorInsumo': new FormControl(data.proveedorInsumo.nombreProveedor),
          'descripcion': new FormControl(data.descripcion)
        });
      this.idMarcaSeleccionada = data.marca.idMarca;
      this.idProveedorInsumoSeleccionada=data.proveedorInsumo.idProveedorInsumo;
      });

    }
  }
  operar() {
    //aqui cuando mandes a registrar tienes que crear un objeto marca
  //   let marcaSeleccion = new Marca();
  //  marcaSeleccion.idMarca = this. idMarcaSeleccioanda;

    //y ese objeto local usarlo para tus futuras llamadas a tus services
  }
  listarMarcas() {
    this.marcaService.listar().subscribe(data => {
      this.marcas = data;
    })
  }
  listarProveedorInsumos() {
    this.proveedorinsumoService.listar().subscribe(data => {
      this.proveedorinsumos = data;
    })
  }

}
