import React from 'react';
import ReactDOM from 'react-dom';
import CytoscapeComponent from 'react-cytoscapejs';

class App extends React.Component {
  constructor(props){
    super(props);
    this.cy = null;
  }

  componentDidMount() {
    this.cy.on('click' , 'node' , (evt) =>{
      console.log("EVENTO : " , evt);
      console.log("EVENTO TARGET: " , evt.target);
      console.log("EVENTO TARGET . DATA: " , evt.target._private.data);
      var node = evt.target
      console.log("buscando el nodo" , node.data());
      console.log('tapped ' + node.id());
    });
  }

  render(){

    const elements = [
       { data: { id: 'one', label: 'Node 1' }, position: { x: 0, y: 0 } },
       { data: { id: 'two', label: 'Node 2' }, position: { x: 100, y: 0 } },
       { data: { id: '3', label: 'Node 3' }, position: { x: 102, y: 0 } },
       { data: { id: '4', label: 'Node 4' }, position: { x: 108, y: 0 } },
       { data: { id: '5', label: 'Node 5' }, position: { x: 130, y: 0 } },
       { data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' } },
       { data: { source: 'two', target: '3', label: 'Edge' } },
       { data: { source: 'two', target: '4', label: 'Edge' } },
       { data: { source: '3', target: '4', label: 'Edge from Node1' } }
    ];

    const elementos = {
      "nodes": [
        { data: { id: 'one', label: 'Node 1' }}, 
        { data: { id: 'two', label: 'Node 2' }, },
        { data: { id: '3', label: 'Node 3' }, },
        { data: { id: '4', label: 'Node 4' }, },
        { data: { id: '5', label: 'Node 5' }, },
      ],
      "edges": [
        
          { data: { id:100 , source: 'one', target: 'two', label: 'Edge from Node1 to Node2' }},
          { data: {  id:101 ,source: 'one', target: 'two', label: 'Edge from Node1 to Node2' }},
          { data: {  id:102 ,source: 'two', target: '3', label: 'Edge' }},
          { data: {  id:103,source: 'two', target: '4', label: 'Edge' }},
          { data: {  id:104 ,source: '3', target: '4', label: 'Edge from Node1' }},
          { data: {  id:105 ,source: '3', target: '4', label: 'Edge from Node' }},
          { data: {  id:106 ,source: '3', target: '4', label: 'Edge from Nod' }},
          { data: {  id:107 ,source: '3', target: '4', label: 'Edge from No' }},
          { data: {  id:108 ,source: '4', target: '3', label: 'Edge2' }},
          { data: {  id:109 ,source: '4', target: '3', label: 'Edge 1e' }}
        
    ]
  }

  const datos = {
    "nodes": [
      {
        "name": "Artículo 325 Bis 2",
        "id": 4373
      },
      {
        "name": "Artículo 325 Bis",
        "id": 4159
      },
      {
        "name": "Artículo 325 Bis 1",
        "id": 4372
      },
      {
        "name": "Artículo 122 Bis",
        "id": 4371
      },
      {
        "name": "Artículo 324",
        "id": 4130
      },
      {
        "name": "Artículo 64 Bis",
        "id": 4370
      },
      {
        "name": "Artículo 279",
        "id": 3734
      },
      {
        "name": "Artículo 279",
        "id": 3736
      },
      {
        "name": "Artículo 55 Bis",
        "id": 4369
      },
      {
        "name": "Artículo 275 Bis",
        "id": 3730
      },
      {
        "name": "Artículo 275 Bis",
        "id": 3727
      },
      {
        "name": "Artículo 250",
        "id": 4368
      },
      {
        "name": "Artículo 249",
        "id": 3590
      },
      {
        "name": "Artículo 400 Bis",
        "id": 4367
      },
      {
        "name": "Artículo 154",
        "id": 3021
      },
      {
        "name": "Artículo 127",
        "id": 4366
      },
      {
        "name": "Artículo 126",
        "id": 2934
      },
      {
        "name": "Artículo 46 Bis 1",
        "id": 4176
      },
      {
        "name": "Artículo 338",
        "id": 4220
      },
      {
        "name": "Artículo 330",
        "id": 4194
      },
      {
        "name": "Artículo 316 Bis 11",
        "id": 3969
      },
      {
        "name": "Artículo 15 Bis",
        "id": 1968
      },
      {
        "name": "Artículo 73 Bis",
        "id": 4365
      },
      {
        "name": "Artículo 2 Bis 22",
        "id": 1180
      },
      {
        "name": "Artículo 2 Bis 19",
        "id": 4364
      },
      {
        "name": "Artículo 2 Bis 17",
        "id": 1115
      },
      {
        "name": "Artículo 43 Bis",
        "id": 4363
      },
      {
        "name": "Artículo 2 Bis 18",
        "id": 4362
      },
      {
        "name": "Artículo 2 Bis 71",
        "id": 1452
      },
      {
        "name": "Artículo 2 Bis 33",
        "id": 1242
      },
      {
        "name": "Artículo 2 Bis 11",
        "id": 1067
      },
      {
        "name": "Artículo 2 Bis 33 o",
        "id": 4361
      },
      {
        "name": "Artículo 2 Bis 6",
        "id": 1009
      },
      {
        "name": "Artículo 2 Bis 56",
        "id": 4360
      },
      {
        "name": "Artículo 2 Bis 55",
        "id": 1326
      },
      {
        "name": "Artículo 134 Bis 1",
        "id": 4359
      },
      {
        "name": "Artículo 1",
        "id": 706
      },
      {
        "name": "II",
        "id": 4353
      },
      {
        "name": "Artículo 355",
        "id": 4331
      },
      {
        "name": "I",
        "id": 4352
      },
      {
        "name": "XVIII",
        "id": 4351
      },
      {
        "name": "XVII",
        "id": 4350
      },
      {
        "name": "C",
        "id": 4349
      },
      {
        "name": "XVI",
        "id": 4348
      },
      {
        "name": "XV",
        "id": 4347
      },
      {
        "name": "XIV",
        "id": 4346
      },
      {
        "name": "XIII",
        "id": 4345
      },
      {
        "name": "XII",
        "id": 4344
      },
      {
        "name": "XI",
        "id": 4343
      },
      {
        "name": "X",
        "id": 4342
      },
      {
        "name": "IX",
        "id": 4341
      },
      {
        "name": "VIII",
        "id": 4340
      },
      {
        "name": "C",
        "id": 4339
      },
      {
        "name": "VII",
        "id": 4338
      },
      {
        "name": "VI",
        "id": 4337
      },
      {
        "name": "V",
        "id": 4336
      },
      {
        "name": "IV",
        "id": 4335
      },
      {
        "name": "III",
        "id": 4334
      },
      {
        "name": "II",
        "id": 4333
      },
      {
        "name": "I",
        "id": 4332
      },
      {
        "name": "Artículo 40",
        "id": 2041
      },
      {
        "name": "Regulación adicional",
        "id": 4330
      },
      {
        "name": "OTRAS DISPOSICIONES",
        "id": 3488
      },
      {
        "name": "C",
        "id": 4329
      },
      {
        "name": "Artículo 354 Bis 6",
        "id": 4325
      },
      {
        "name": "III",
        "id": 4328
      },
      {
        "name": "II",
        "id": 4327
      },
      {
        "name": "I",
        "id": 4326
      },
      {
        "name": "De la revocación de la autorización",
        "id": 4324
      },
      {
        "name": "De las Empresas de Servicios y Sociedades Inmobiliarias",
        "id": 4283
      },
      {
        "name": "II",
        "id": 4323
      },
      {
        "name": "Artículo 354 Bis 5",
        "id": 4321
      },
      {
        "name": "I",
        "id": 4322
      },
      {
        "name": "Artículo 354 Bis 3",
        "id": 4318
      },
      {
        "name": "De la inspección y vigilancia",
        "id": 4317
      },
      {
        "name": "C",
        "id": 4320
      },
      {
        "name": "Artículo 354 Bis 4",
        "id": 4319
      },
      {
        "name": "Artículo 354",
        "id": 4279
      },
      {
        "name": "VII",
        "id": 4316
      },
      {
        "name": "Artículo 354 Bis 2",
        "id": 4309
      },
      {
        "name": "V",
        "id": 4315
      },
      {
        "name": "IV",
        "id": 4314
      },
      {
        "name": "C",
        "id": 4313
      },
      {
        "name": "III",
        "id": 4312
      },
      {
        "name": "II",
        "id": 4311
      },
      {
        "name": "I",
        "id": 4310
      },
      {
        "name": "Artículo 354 Bis",
        "id": 4285
      },
      {
        "name": "De la organización y funcionamiento",
        "id": 4308
      },
      {
        "name": "VII",
        "id": 4307
      },
      {
        "name": "Artículo 354 Bis 1",
        "id": 4299
      },
      {
        "name": "VI",
        "id": 4306
      },
      {
        "name": "V",
        "id": 4305
      },
      {
        "name": "C",
        "id": 4304
      },
      {
        "name": "IV",
        "id": 4303
      },
      {
        "name": "III",
        "id": 4302
      },
      {
        "name": "II",
        "id": 4301
      },
      {
        "name": "I",
        "id": 4300
      },
      {
        "name": "De la autorización para invertir en Empresas de Servicios y",
        "id": 4284
      },
      {
        "name": "XII",
        "id": 4298
      },
      {
        "name": "XI",
        "id": 4297
      },
      {
        "name": "X",
        "id": 4296
      },
      {
        "name": "IX",
        "id": 4295
      },
      {
        "name": "VIII",
        "id": 4294
      },
      {
        "name": "VII",
        "id": 4293
      },
      {
        "name": "VI",
        "id": 4292
      },
      {
        "name": "C",
        "id": 4291
      },
      {
        "name": "V",
        "id": 4290
      },
      {
        "name": "IV",
        "id": 4289
      },
      {
        "name": "III",
        "id": 4288
      },
      {
        "name": "II",
        "id": 4287
      },
      {
        "name": "I",
        "id": 4286
      },
      {
        "name": "C",
        "id": 4282
      },
      {
        "name": "II",
        "id": 4281
      },
      {
        "name": "I",
        "id": 4280
      },
      {
        "name": "Artículo 75",
        "id": 2357
      },
      {
        "name": "Artículo 88",
        "id": 2522
      },
      {
        "name": "Artículo 89",
        "id": 2580
      },
      {
        "name": "De las autorizaciones para realizar las inversiones con cargo a la parte básica del",
        "id": 4277
      },
      {
        "name": "Artículo 353",
        "id": 4278
      },
      {
        "name": "Artículo 353",
        "id": 4276
      },
      {
        "name": "De la relación e información a que se refieren los Artículos 10, fracciones II, III, IV y VI,",
        "id": 4203
      },
      {
        "name": "Artículo 352",
        "id": 4275
      },
      {
        "name": "Artículo 351",
        "id": 4274
      },
      {
        "name": "C",
        "id": 4273
      },
      {
        "name": "Artículo 350",
        "id": 4271
      },
      {
        "name": "C",
        "id": 4272
      },
      {
        "name": "Artículo 345",
        "id": 4257
      },
      {
        "name": "Artículo 349",
        "id": 4270
      },
      {
        "name": "Artículo 348",
        "id": 4269
      },
      {
        "name": "Artículo 347",
        "id": 4268
      },
      {
        "name": "C",
        "id": 4267
      },
      {
        "name": "Artículo 346",
        "id": 4258
      },
      {
        "name": "b",
        "id": 4266
      },
      {
        "name": "II",
        "id": 4264
      },
      {
        "name": "a",
        "id": 4265
      },
      {
        "name": "d",
        "id": 4263
      },
      {
        "name": "I",
        "id": 4259
      },
      {
        "name": "c",
        "id": 4262
      },
      {
        "name": "b",
        "id": 4261
      },
      {
        "name": "a",
        "id": 4260
      },
      {
        "name": "Artículo 342",
        "id": 4248
      },
      {
        "name": "C",
        "id": 4256
      },
      {
        "name": "Artículo 344",
        "id": 4255
      },
      {
        "name": "IV",
        "id": 4254
      },
      {
        "name": "Artículo 343",
        "id": 4251
      },
      {
        "name": "III",
        "id": 4253
      },
      {
        "name": "IV",
        "id": 4252
      },
      {
        "name": "Artículo 341",
        "id": 4236
      },
      {
        "name": "II",
        "id": 4250
      },
      {
        "name": "I",
        "id": 4249
      },
      {
        "name": "c",
        "id": 4247
      },
      {
        "name": "C",
        "id": 4244
      },
      {
        "name": "b",
        "id": 4246
      },
      {
        "name": "a",
        "id": 4245
      },
      {
        "name": "VII",
        "id": 4243
      },
      {
        "name": "VI",
        "id": 4242
      },
      {
        "name": "V",
        "id": 4241
      },
      {
        "name": "IV",
        "id": 4240
      },
      {
        "name": "III",
        "id": 4239
      },
      {
        "name": "II",
        "id": 4238
      },
      {
        "name": "I",
        "id": 4237
      },
      {
        "name": "Artículo 114",
        "id": 2841
      },
      {
        "name": "Artículo 340",
        "id": 4235
      },
      {
        "name": "IV",
        "id": 4234
      },
      {
        "name": "Artículo 339",
        "id": 4229
      },
      {
        "name": "III",
        "id": 4233
      },
      {
        "name": "C",
        "id": 4232
      },
      {
        "name": "II",
        "id": 4231
      },
      {
        "name": "I",
        "id": 4230
      },
      {
        "name": "e",
        "id": 4228
      },
      {
        "name": "III",
        "id": 4223
      },
      {
        "name": "d",
        "id": 4227
      },
      {
        "name": "c",
        "id": 4226
      },
      {
        "name": "b",
        "id": 4225
      },
      {
        "name": "a",
        "id": 4224
      },
      {
        "name": "II",
        "id": 4222
      },
      {
        "name": "I",
        "id": 4221
      },
      {
        "name": "C",
        "id": 4219
      },
      {
        "name": "Artículo 337 Bis 1",
        "id": 4218
      },
      {
        "name": "Artículo 96",
        "id": 2655
      },
      {
        "name": "II",
        "id": 4217
      },
      {
        "name": "Artículo 337 Bis",
        "id": 4211
      },
      {
        "name": "d",
        "id": 4216
      },
      {
        "name": "I",
        "id": 4212
      },
      {
        "name": "c",
        "id": 4215
      },
      {
        "name": "b",
        "id": 4214
      },
      {
        "name": "a",
        "id": 4213
      },
      {
        "name": "Artículo 2",
        "id": 975
      },
      {
        "name": "Artículo 10",
        "id": 1932
      },
      {
        "name": "Artículo 337",
        "id": 4209
      },
      {
        "name": "C",
        "id": 4210
      },
      {
        "name": "Artículo 336",
        "id": 4205
      },
      {
        "name": "Artículo 22",
        "id": 3
      },
      {
        "name": "C",
        "id": 4208
      },
      {
        "name": "II",
        "id": 4207
      },
      {
        "name": "I",
        "id": 4206
      },
      {
        "name": "Artículo 335",
        "id": 4204
      },
      {
        "name": "Artículo 318",
        "id": 4030
      },
      {
        "name": "Artículo 335",
        "id": 4202
      },
      {
        "name": "Disposiciones finales",
        "id": 4191
      },
      {
        "name": "C",
        "id": 4201
      },
      {
        "name": "Artículo 334",
        "id": 4171
      },
      {
        "name": "VIII",
        "id": 4200
      },
      {
        "name": "VII",
        "id": 4199
      },
      {
        "name": "VI",
        "id": 4198
      },
      {
        "name": "V",
        "id": 4197
      },
      {
        "name": "IV",
        "id": 4196
      },
      {
        "name": "III",
        "id": 4175
      },
      {
        "name": "II",
        "id": 4174
      },
      {
        "name": "I",
        "id": 4173
      },
      {
        "name": "C",
        "id": 4172
      },
      {
        "name": "Artículo 319",
        "id": 4065
      }
    ],
    "edges": [
      {
        "id": 11538,
        "source": 4373,
        "type": "REFERS",
        "target": 4159
      },
      {
        "id": 11536,
        "source": 4372,
        "type": "REFERS",
        "target": 4159
      },
      {
        "id": 11527,
        "source": 4371,
        "type": "REFERS",
        "target": 4130
      },
      {
        "id": 11418,
        "source": 4370,
        "type": "REFERS",
        "target": 3734
      },
      {
        "id": 11417,
        "source": 4370,
        "type": "REFERS",
        "target": 3736
      },
      {
        "id": 11414,
        "source": 4369,
        "type": "REFERS",
        "target": 3730
      },
      {
        "id": 11415,
        "source": 4369,
        "type": "REFERS",
        "target": 3727
      },
      {
        "id": 11380,
        "source": 4368,
        "type": "REFERS",
        "target": 3590
      },
      {
        "id": 11269,
        "source": 4367,
        "type": "REFERS",
        "target": 3021
      },
      {
        "id": 11257,
        "source": 4366,
        "type": "REFERS",
        "target": 2934
      },
      {
        "id": 11561,
        "source": 4176,
        "type": "REFERS",
        "target": 4220
      },
      {
        "id": 11547,
        "source": 4176,
        "type": "REFERS",
        "target": 4194
      },
      {
        "id": 11478,
        "source": 4176,
        "type": "REFERS",
        "target": 3969
      },
      {
        "id": 11054,
        "source": 4176,
        "type": "REFERS",
        "target": 1968
      },
      {
        "id": 10821,
        "source": 4365,
        "type": "REFERS",
        "target": 1180
      },
      {
        "id": 10812,
        "source": 4364,
        "type": "REFERS",
        "target": 1115
      },
      {
        "id": 10805,
        "source": 4363,
        "type": "REFERS",
        "target": 1115
      },
      {
        "id": 10803,
        "source": 4363,
        "type": "REFERS",
        "target": 1115
      },
      {
        "id": 10880,
        "source": 4362,
        "type": "REFERS",
        "target": 1452
      },
      {
        "id": 10830,
        "source": 4362,
        "type": "REFERS",
        "target": 1242
      },
      {
        "id": 10809,
        "source": 4362,
        "type": "REFERS",
        "target": 1115
      },
      {
        "id": 10796,
        "source": 4362,
        "type": "REFERS",
        "target": 1067
      },
      {
        "id": 10794,
        "source": 4362,
        "type": "REFERS",
        "target": 1067
      },
      {
        "id": 10783,
        "source": 4361,
        "type": "REFERS",
        "target": 1009
      },
      {
        "id": 10844,
        "source": 4360,
        "type": "REFERS",
        "target": 1326
      },
      {
        "id": 10775,
        "source": 4360,
        "type": "REFERS",
        "target": 1009
      },
      {
        "id": 10731,
        "source": 4359,
        "type": "REFERS",
        "target": 706
      },
      {
        "id": 10730,
        "source": 4359,
        "type": "REFERS",
        "target": 706
      },
      {
        "id": 10714,
        "source": 4353,
        "type": "HAS_APART",
        "target": 4331
      },
      {
        "id": 10711,
        "source": 4352,
        "type": "HAS_APART",
        "target": 4331
      },
      {
        "id": 10709,
        "source": 4351,
        "type": "HAS_APART",
        "target": 4331
      },
      {
        "id": 10707,
        "source": 4350,
        "type": "HAS_APART",
        "target": 4331
      },
      {
        "id": 10704,
        "source": 4349,
        "type": "HAS_APART",
        "target": 4331
      },
      {
        "id": 10702,
        "source": 4348,
        "type": "HAS_APART",
        "target": 4331
      },
      {
        "id": 10700,
        "source": 4347,
        "type": "HAS_APART",
        "target": 4331
      },
      {
        "id": 10698,
        "source": 4346,
        "type": "HAS_APART",
        "target": 4331
      },
      {
        "id": 10696,
        "source": 4345,
        "type": "HAS_APART",
        "target": 4331
      },
      {
        "id": 10694,
        "source": 4344,
        "type": "HAS_APART",
        "target": 4331
      },
      {
        "id": 10692,
        "source": 4343,
        "type": "HAS_APART",
        "target": 4331
      },
      {
        "id": 10690,
        "source": 4342,
        "type": "HAS_APART",
        "target": 4331
      },
      {
        "id": 10688,
        "source": 4341,
        "type": "HAS_APART",
        "target": 4331
      },
      {
        "id": 10686,
        "source": 4340,
        "type": "HAS_APART",
        "target": 4331
      },
      {
        "id": 10705,
        "source": 4339,
        "type": "HAS_APART",
        "target": 4331
      },
      {
        "id": 10684,
        "source": 4339,
        "type": "HAS_APART",
        "target": 4331
      },
      {
        "id": 10682,
        "source": 4338,
        "type": "HAS_APART",
        "target": 4331
      },
      {
        "id": 10680,
        "source": 4337,
        "type": "HAS_APART",
        "target": 4331
      },
      {
        "id": 10678,
        "source": 4336,
        "type": "HAS_APART",
        "target": 4331
      },
      {
        "id": 10676,
        "source": 4335,
        "type": "HAS_APART",
        "target": 4331
      },
      {
        "id": 10674,
        "source": 4334,
        "type": "HAS_APART",
        "target": 4331
      },
      {
        "id": 10715,
        "source": 4333,
        "type": "HAS_APART",
        "target": 4331
      },
      {
        "id": 10672,
        "source": 4333,
        "type": "HAS_APART",
        "target": 4331
      },
      {
        "id": 10712,
        "source": 4332,
        "type": "HAS_APART",
        "target": 4331
      },
      {
        "id": 10670,
        "source": 4332,
        "type": "HAS_APART",
        "target": 4331
      },
      {
        "id": 11574,
        "source": 4331,
        "type": "REFERS",
        "target": 2041
      },
      {
        "id": 10714,
        "source": 4331,
        "type": "HAS_APART",
        "target": 4353
      },
      {
        "id": 10715,
        "source": 4331,
        "type": "HAS_APART",
        "target": 4333
      },
      {
        "id": 10711,
        "source": 4331,
        "type": "HAS_APART",
        "target": 4352
      },
      {
        "id": 10712,
        "source": 4331,
        "type": "HAS_APART",
        "target": 4332
      },
      {
        "id": 10709,
        "source": 4331,
        "type": "HAS_APART",
        "target": 4351
      },
      {
        "id": 10707,
        "source": 4331,
        "type": "HAS_APART",
        "target": 4350
      },
      {
        "id": 10705,
        "source": 4331,
        "type": "HAS_APART",
        "target": 4339
      },
      {
        "id": 10704,
        "source": 4331,
        "type": "HAS_APART",
        "target": 4349
      },
      {
        "id": 10702,
        "source": 4331,
        "type": "HAS_APART",
        "target": 4348
      },
      {
        "id": 10700,
        "source": 4331,
        "type": "HAS_APART",
        "target": 4347
      },
      {
        "id": 10698,
        "source": 4331,
        "type": "HAS_APART",
        "target": 4346
      },
      {
        "id": 10696,
        "source": 4331,
        "type": "HAS_APART",
        "target": 4345
      },
      {
        "id": 10694,
        "source": 4331,
        "type": "HAS_APART",
        "target": 4344
      },
      {
        "id": 10692,
        "source": 4331,
        "type": "HAS_APART",
        "target": 4343
      },
      {
        "id": 10690,
        "source": 4331,
        "type": "HAS_APART",
        "target": 4342
      },
      {
        "id": 10688,
        "source": 4331,
        "type": "HAS_APART",
        "target": 4341
      },
      {
        "id": 10686,
        "source": 4331,
        "type": "HAS_APART",
        "target": 4340
      },
      {
        "id": 10684,
        "source": 4331,
        "type": "HAS_APART",
        "target": 4339
      },
      {
        "id": 10682,
        "source": 4331,
        "type": "HAS_APART",
        "target": 4338
      },
      {
        "id": 10680,
        "source": 4331,
        "type": "HAS_APART",
        "target": 4337
      },
      {
        "id": 10678,
        "source": 4331,
        "type": "HAS_APART",
        "target": 4336
      },
      {
        "id": 10676,
        "source": 4331,
        "type": "HAS_APART",
        "target": 4335
      },
      {
        "id": 10674,
        "source": 4331,
        "type": "HAS_APART",
        "target": 4334
      },
      {
        "id": 10672,
        "source": 4331,
        "type": "HAS_APART",
        "target": 4333
      },
      {
        "id": 10670,
        "source": 4331,
        "type": "HAS_APART",
        "target": 4332
      },
      {
        "id": 10668,
        "source": 4331,
        "type": "HAS_ELEMENT",
        "target": 4330
      },
      {
        "id": 10668,
        "source": 4330,
        "type": "HAS_ELEMENT",
        "target": 4331
      },
      {
        "id": 10666,
        "source": 4330,
        "type": "HAS_ELEMENT",
        "target": 3488
      },
      {
        "id": 10664,
        "source": 4329,
        "type": "HAS_APART",
        "target": 4325
      },
      {
        "id": 10662,
        "source": 4328,
        "type": "HAS_APART",
        "target": 4325
      },
      {
        "id": 10660,
        "source": 4327,
        "type": "HAS_APART",
        "target": 4325
      },
      {
        "id": 10658,
        "source": 4326,
        "type": "HAS_APART",
        "target": 4325
      },
      {
        "id": 10664,
        "source": 4325,
        "type": "HAS_APART",
        "target": 4329
      },
      {
        "id": 10662,
        "source": 4325,
        "type": "HAS_APART",
        "target": 4328
      },
      {
        "id": 10660,
        "source": 4325,
        "type": "HAS_APART",
        "target": 4327
      },
      {
        "id": 10658,
        "source": 4325,
        "type": "HAS_APART",
        "target": 4326
      },
      {
        "id": 10656,
        "source": 4325,
        "type": "HAS_ELEMENT",
        "target": 4324
      },
      {
        "id": 10656,
        "source": 4324,
        "type": "HAS_ELEMENT",
        "target": 4325
      },
      {
        "id": 10654,
        "source": 4324,
        "type": "HAS_ELEMENT",
        "target": 4283
      },
      {
        "id": 10652,
        "source": 4323,
        "type": "HAS_APART",
        "target": 4321
      },
      {
        "id": 10650,
        "source": 4322,
        "type": "HAS_APART",
        "target": 4321
      },
      {
        "id": 11573,
        "source": 4321,
        "type": "REFERS",
        "target": 4318
      },
      {
        "id": 10652,
        "source": 4321,
        "type": "HAS_APART",
        "target": 4323
      },
      {
        "id": 10650,
        "source": 4321,
        "type": "HAS_APART",
        "target": 4322
      },
      {
        "id": 10648,
        "source": 4321,
        "type": "HAS_ELEMENT",
        "target": 4317
      },
      {
        "id": 10646,
        "source": 4320,
        "type": "HAS_APART",
        "target": 4319
      },
      {
        "id": 11572,
        "source": 4319,
        "type": "REFERS",
        "target": 4279
      },
      {
        "id": 10646,
        "source": 4319,
        "type": "HAS_APART",
        "target": 4320
      },
      {
        "id": 10644,
        "source": 4319,
        "type": "HAS_ELEMENT",
        "target": 4317
      },
      {
        "id": 11573,
        "source": 4318,
        "type": "REFERS",
        "target": 4321
      },
      {
        "id": 10642,
        "source": 4318,
        "type": "HAS_ELEMENT",
        "target": 4317
      },
      {
        "id": 10648,
        "source": 4317,
        "type": "HAS_ELEMENT",
        "target": 4321
      },
      {
        "id": 10644,
        "source": 4317,
        "type": "HAS_ELEMENT",
        "target": 4319
      },
      {
        "id": 10642,
        "source": 4317,
        "type": "HAS_ELEMENT",
        "target": 4318
      },
      {
        "id": 10640,
        "source": 4317,
        "type": "HAS_ELEMENT",
        "target": 4283
      },
      {
        "id": 10638,
        "source": 4316,
        "type": "HAS_APART",
        "target": 4309
      },
      {
        "id": 10636,
        "source": 4315,
        "type": "HAS_APART",
        "target": 4309
      },
      {
        "id": 10634,
        "source": 4314,
        "type": "HAS_APART",
        "target": 4309
      },
      {
        "id": 10632,
        "source": 4313,
        "type": "HAS_APART",
        "target": 4309
      },
      {
        "id": 10630,
        "source": 4312,
        "type": "HAS_APART",
        "target": 4309
      },
      {
        "id": 10628,
        "source": 4311,
        "type": "HAS_APART",
        "target": 4309
      },
      {
        "id": 10626,
        "source": 4310,
        "type": "HAS_APART",
        "target": 4309
      },
      {
        "id": 11571,
        "source": 4309,
        "type": "REFERS",
        "target": 4285
      },
      {
        "id": 10638,
        "source": 4309,
        "type": "HAS_APART",
        "target": 4316
      },
      {
        "id": 10636,
        "source": 4309,
        "type": "HAS_APART",
        "target": 4315
      },
      {
        "id": 10634,
        "source": 4309,
        "type": "HAS_APART",
        "target": 4314
      },
      {
        "id": 10632,
        "source": 4309,
        "type": "HAS_APART",
        "target": 4313
      },
      {
        "id": 10630,
        "source": 4309,
        "type": "HAS_APART",
        "target": 4312
      },
      {
        "id": 10628,
        "source": 4309,
        "type": "HAS_APART",
        "target": 4311
      },
      {
        "id": 10626,
        "source": 4309,
        "type": "HAS_APART",
        "target": 4310
      },
      {
        "id": 10624,
        "source": 4309,
        "type": "HAS_ELEMENT",
        "target": 4308
      },
      {
        "id": 10624,
        "source": 4308,
        "type": "HAS_ELEMENT",
        "target": 4309
      },
      {
        "id": 10622,
        "source": 4308,
        "type": "HAS_ELEMENT",
        "target": 4283
      },
      {
        "id": 10620,
        "source": 4307,
        "type": "HAS_APART",
        "target": 4299
      },
      {
        "id": 10618,
        "source": 4306,
        "type": "HAS_APART",
        "target": 4299
      },
      {
        "id": 10616,
        "source": 4305,
        "type": "HAS_APART",
        "target": 4299
      },
      {
        "id": 10614,
        "source": 4304,
        "type": "HAS_APART",
        "target": 4299
      },
      {
        "id": 10612,
        "source": 4303,
        "type": "HAS_APART",
        "target": 4299
      },
      {
        "id": 10610,
        "source": 4302,
        "type": "HAS_APART",
        "target": 4299
      },
      {
        "id": 10608,
        "source": 4301,
        "type": "HAS_APART",
        "target": 4299
      },
      {
        "id": 10606,
        "source": 4300,
        "type": "HAS_APART",
        "target": 4299
      },
      {
        "id": 10620,
        "source": 4299,
        "type": "HAS_APART",
        "target": 4307
      },
      {
        "id": 10618,
        "source": 4299,
        "type": "HAS_APART",
        "target": 4306
      },
      {
        "id": 10616,
        "source": 4299,
        "type": "HAS_APART",
        "target": 4305
      },
      {
        "id": 10614,
        "source": 4299,
        "type": "HAS_APART",
        "target": 4304
      },
      {
        "id": 10612,
        "source": 4299,
        "type": "HAS_APART",
        "target": 4303
      },
      {
        "id": 10610,
        "source": 4299,
        "type": "HAS_APART",
        "target": 4302
      },
      {
        "id": 10608,
        "source": 4299,
        "type": "HAS_APART",
        "target": 4301
      },
      {
        "id": 10606,
        "source": 4299,
        "type": "HAS_APART",
        "target": 4300
      },
      {
        "id": 10604,
        "source": 4299,
        "type": "HAS_ELEMENT",
        "target": 4284
      },
      {
        "id": 10602,
        "source": 4298,
        "type": "HAS_APART",
        "target": 4285
      },
      {
        "id": 10600,
        "source": 4297,
        "type": "HAS_APART",
        "target": 4285
      },
      {
        "id": 10598,
        "source": 4296,
        "type": "HAS_APART",
        "target": 4285
      },
      {
        "id": 10596,
        "source": 4295,
        "type": "HAS_APART",
        "target": 4285
      },
      {
        "id": 10594,
        "source": 4294,
        "type": "HAS_APART",
        "target": 4285
      },
      {
        "id": 10592,
        "source": 4293,
        "type": "HAS_APART",
        "target": 4285
      },
      {
        "id": 10590,
        "source": 4292,
        "type": "HAS_APART",
        "target": 4285
      },
      {
        "id": 10588,
        "source": 4291,
        "type": "HAS_APART",
        "target": 4285
      },
      {
        "id": 10586,
        "source": 4290,
        "type": "HAS_APART",
        "target": 4285
      },
      {
        "id": 10584,
        "source": 4289,
        "type": "HAS_APART",
        "target": 4285
      },
      {
        "id": 10582,
        "source": 4288,
        "type": "HAS_APART",
        "target": 4285
      },
      {
        "id": 10580,
        "source": 4287,
        "type": "HAS_APART",
        "target": 4285
      },
      {
        "id": 10578,
        "source": 4286,
        "type": "HAS_APART",
        "target": 4285
      },
      {
        "id": 11571,
        "source": 4285,
        "type": "REFERS",
        "target": 4309
      },
      {
        "id": 11570,
        "source": 4285,
        "type": "REFERS",
        "target": 4279
      },
      {
        "id": 10602,
        "source": 4285,
        "type": "HAS_APART",
        "target": 4298
      },
      {
        "id": 10600,
        "source": 4285,
        "type": "HAS_APART",
        "target": 4297
      },
      {
        "id": 10598,
        "source": 4285,
        "type": "HAS_APART",
        "target": 4296
      },
      {
        "id": 10596,
        "source": 4285,
        "type": "HAS_APART",
        "target": 4295
      },
      {
        "id": 10594,
        "source": 4285,
        "type": "HAS_APART",
        "target": 4294
      },
      {
        "id": 10592,
        "source": 4285,
        "type": "HAS_APART",
        "target": 4293
      },
      {
        "id": 10590,
        "source": 4285,
        "type": "HAS_APART",
        "target": 4292
      },
      {
        "id": 10588,
        "source": 4285,
        "type": "HAS_APART",
        "target": 4291
      },
      {
        "id": 10586,
        "source": 4285,
        "type": "HAS_APART",
        "target": 4290
      },
      {
        "id": 10584,
        "source": 4285,
        "type": "HAS_APART",
        "target": 4289
      },
      {
        "id": 10582,
        "source": 4285,
        "type": "HAS_APART",
        "target": 4288
      },
      {
        "id": 10580,
        "source": 4285,
        "type": "HAS_APART",
        "target": 4287
      },
      {
        "id": 10578,
        "source": 4285,
        "type": "HAS_APART",
        "target": 4286
      },
      {
        "id": 10576,
        "source": 4285,
        "type": "HAS_ELEMENT",
        "target": 4284
      },
      {
        "id": 10604,
        "source": 4284,
        "type": "HAS_ELEMENT",
        "target": 4299
      },
      {
        "id": 10576,
        "source": 4284,
        "type": "HAS_ELEMENT",
        "target": 4285
      },
      {
        "id": 10574,
        "source": 4284,
        "type": "HAS_ELEMENT",
        "target": 4283
      },
      {
        "id": 10654,
        "source": 4283,
        "type": "HAS_ELEMENT",
        "target": 4324
      },
      {
        "id": 10640,
        "source": 4283,
        "type": "HAS_ELEMENT",
        "target": 4317
      },
      {
        "id": 10622,
        "source": 4283,
        "type": "HAS_ELEMENT",
        "target": 4308
      },
      {
        "id": 10574,
        "source": 4283,
        "type": "HAS_ELEMENT",
        "target": 4284
      },
      {
        "id": 10572,
        "source": 4283,
        "type": "HAS_ELEMENT",
        "target": 3488
      },
      {
        "id": 10570,
        "source": 4282,
        "type": "HAS_APART",
        "target": 4279
      },
      {
        "id": 10568,
        "source": 4281,
        "type": "HAS_APART",
        "target": 4279
      },
      {
        "id": 10566,
        "source": 4280,
        "type": "HAS_APART",
        "target": 4279
      },
      {
        "id": 11572,
        "source": 4279,
        "type": "REFERS",
        "target": 4319
      },
      {
        "id": 11570,
        "source": 4279,
        "type": "REFERS",
        "target": 4285
      },
      {
        "id": 11569,
        "source": 4279,
        "type": "REFERS",
        "target": 2357
      },
      {
        "id": 11568,
        "source": 4279,
        "type": "REFERS",
        "target": 2522
      },
      {
        "id": 11567,
        "source": 4279,
        "type": "REFERS",
        "target": 2580
      },
      {
        "id": 10570,
        "source": 4279,
        "type": "HAS_APART",
        "target": 4282
      },
      {
        "id": 10568,
        "source": 4279,
        "type": "HAS_APART",
        "target": 4281
      },
      {
        "id": 10566,
        "source": 4279,
        "type": "HAS_APART",
        "target": 4280
      },
      {
        "id": 10564,
        "source": 4279,
        "type": "HAS_ELEMENT",
        "target": 4277
      },
      {
        "id": 10562,
        "source": 4278,
        "type": "HAS_ELEMENT",
        "target": 4277
      },
      {
        "id": 10564,
        "source": 4277,
        "type": "HAS_ELEMENT",
        "target": 4279
      },
      {
        "id": 10562,
        "source": 4277,
        "type": "HAS_ELEMENT",
        "target": 4278
      },
      {
        "id": 10560,
        "source": 4277,
        "type": "HAS_ELEMENT",
        "target": 3488
      },
      {
        "id": 10558,
        "source": 4276,
        "type": "HAS_ELEMENT",
        "target": 4203
      },
      {
        "id": 10556,
        "source": 4275,
        "type": "HAS_ELEMENT",
        "target": 4203
      },
      {
        "id": 10554,
        "source": 4274,
        "type": "HAS_ELEMENT",
        "target": 4203
      },
      {
        "id": 10551,
        "source": 4273,
        "type": "HAS_APART",
        "target": 4271
      },
      {
        "id": 10552,
        "source": 4272,
        "type": "HAS_APART",
        "target": 4271
      },
      {
        "id": 10549,
        "source": 4272,
        "type": "HAS_APART",
        "target": 4271
      },
      {
        "id": 11566,
        "source": 4271,
        "type": "REFERS",
        "target": 4257
      },
      {
        "id": 10552,
        "source": 4271,
        "type": "HAS_APART",
        "target": 4272
      },
      {
        "id": 10551,
        "source": 4271,
        "type": "HAS_APART",
        "target": 4273
      },
      {
        "id": 10549,
        "source": 4271,
        "type": "HAS_APART",
        "target": 4272
      },
      {
        "id": 10547,
        "source": 4271,
        "type": "HAS_ELEMENT",
        "target": 4203
      },
      {
        "id": 10545,
        "source": 4270,
        "type": "HAS_ELEMENT",
        "target": 4203
      },
      {
        "id": 10543,
        "source": 4269,
        "type": "HAS_ELEMENT",
        "target": 4203
      },
      {
        "id": 10541,
        "source": 4268,
        "type": "HAS_ELEMENT",
        "target": 4203
      },
      {
        "id": 10539,
        "source": 4267,
        "type": "HAS_APART",
        "target": 4258
      },
      {
        "id": 10537,
        "source": 4266,
        "type": "HAS_APART",
        "target": 4264
      },
      {
        "id": 10535,
        "source": 4265,
        "type": "HAS_APART",
        "target": 4264
      },
      {
        "id": 10537,
        "source": 4264,
        "type": "HAS_APART",
        "target": 4266
      },
      {
        "id": 10535,
        "source": 4264,
        "type": "HAS_APART",
        "target": 4265
      },
      {
        "id": 10533,
        "source": 4264,
        "type": "HAS_APART",
        "target": 4258
      },
      {
        "id": 10531,
        "source": 4263,
        "type": "HAS_APART",
        "target": 4259
      },
      {
        "id": 10529,
        "source": 4262,
        "type": "HAS_APART",
        "target": 4259
      },
      {
        "id": 10527,
        "source": 4261,
        "type": "HAS_APART",
        "target": 4259
      },
      {
        "id": 10525,
        "source": 4260,
        "type": "HAS_APART",
        "target": 4259
      },
      {
        "id": 10531,
        "source": 4259,
        "type": "HAS_APART",
        "target": 4263
      },
      {
        "id": 10529,
        "source": 4259,
        "type": "HAS_APART",
        "target": 4262
      },
      {
        "id": 10527,
        "source": 4259,
        "type": "HAS_APART",
        "target": 4261
      },
      {
        "id": 10525,
        "source": 4259,
        "type": "HAS_APART",
        "target": 4260
      },
      {
        "id": 10523,
        "source": 4259,
        "type": "HAS_APART",
        "target": 4258
      },
      {
        "id": 10539,
        "source": 4258,
        "type": "HAS_APART",
        "target": 4267
      },
      {
        "id": 10533,
        "source": 4258,
        "type": "HAS_APART",
        "target": 4264
      },
      {
        "id": 10523,
        "source": 4258,
        "type": "HAS_APART",
        "target": 4259
      },
      {
        "id": 10521,
        "source": 4258,
        "type": "HAS_ELEMENT",
        "target": 4203
      },
      {
        "id": 11566,
        "source": 4257,
        "type": "REFERS",
        "target": 4271
      },
      {
        "id": 11565,
        "source": 4257,
        "type": "REFERS",
        "target": 4248
      },
      {
        "id": 10519,
        "source": 4257,
        "type": "HAS_ELEMENT",
        "target": 4203
      },
      {
        "id": 10517,
        "source": 4256,
        "type": "HAS_APART",
        "target": 4255
      },
      {
        "id": 10517,
        "source": 4255,
        "type": "HAS_APART",
        "target": 4256
      },
      {
        "id": 10515,
        "source": 4255,
        "type": "HAS_ELEMENT",
        "target": 4203
      },
      {
        "id": 10512,
        "source": 4254,
        "type": "HAS_APART",
        "target": 4251
      },
      {
        "id": 10510,
        "source": 4253,
        "type": "HAS_APART",
        "target": 4251
      },
      {
        "id": 10513,
        "source": 4252,
        "type": "HAS_APART",
        "target": 4251
      },
      {
        "id": 10508,
        "source": 4252,
        "type": "HAS_APART",
        "target": 4251
      },
      {
        "id": 11564,
        "source": 4251,
        "type": "REFERS",
        "target": 4248
      },
      {
        "id": 11563,
        "source": 4251,
        "type": "REFERS",
        "target": 4236
      },
      {
        "id": 10512,
        "source": 4251,
        "type": "HAS_APART",
        "target": 4254
      },
      {
        "id": 10513,
        "source": 4251,
        "type": "HAS_APART",
        "target": 4252
      },
      {
        "id": 10510,
        "source": 4251,
        "type": "HAS_APART",
        "target": 4253
      },
      {
        "id": 10508,
        "source": 4251,
        "type": "HAS_APART",
        "target": 4252
      },
      {
        "id": 10506,
        "source": 4251,
        "type": "HAS_ELEMENT",
        "target": 4203
      },
      {
        "id": 10504,
        "source": 4250,
        "type": "HAS_APART",
        "target": 4248
      },
      {
        "id": 10502,
        "source": 4249,
        "type": "HAS_APART",
        "target": 4248
      },
      {
        "id": 11565,
        "source": 4248,
        "type": "REFERS",
        "target": 4257
      },
      {
        "id": 11564,
        "source": 4248,
        "type": "REFERS",
        "target": 4251
      },
      {
        "id": 11562,
        "source": 4248,
        "type": "REFERS",
        "target": 4236
      },
      {
        "id": 10504,
        "source": 4248,
        "type": "HAS_APART",
        "target": 4250
      },
      {
        "id": 10502,
        "source": 4248,
        "type": "HAS_APART",
        "target": 4249
      },
      {
        "id": 10500,
        "source": 4248,
        "type": "HAS_ELEMENT",
        "target": 4203
      },
      {
        "id": 10498,
        "source": 4247,
        "type": "HAS_APART",
        "target": 4244
      },
      {
        "id": 10496,
        "source": 4246,
        "type": "HAS_APART",
        "target": 4244
      },
      {
        "id": 10494,
        "source": 4245,
        "type": "HAS_APART",
        "target": 4244
      },
      {
        "id": 10498,
        "source": 4244,
        "type": "HAS_APART",
        "target": 4247
      },
      {
        "id": 10496,
        "source": 4244,
        "type": "HAS_APART",
        "target": 4246
      },
      {
        "id": 10494,
        "source": 4244,
        "type": "HAS_APART",
        "target": 4245
      },
      {
        "id": 10492,
        "source": 4244,
        "type": "HAS_APART",
        "target": 4236
      },
      {
        "id": 10490,
        "source": 4243,
        "type": "HAS_APART",
        "target": 4236
      },
      {
        "id": 10488,
        "source": 4242,
        "type": "HAS_APART",
        "target": 4236
      },
      {
        "id": 10486,
        "source": 4241,
        "type": "HAS_APART",
        "target": 4236
      },
      {
        "id": 10484,
        "source": 4240,
        "type": "HAS_APART",
        "target": 4236
      },
      {
        "id": 10482,
        "source": 4239,
        "type": "HAS_APART",
        "target": 4236
      },
      {
        "id": 10480,
        "source": 4238,
        "type": "HAS_APART",
        "target": 4236
      },
      {
        "id": 10478,
        "source": 4237,
        "type": "HAS_APART",
        "target": 4236
      },
      {
        "id": 11563,
        "source": 4236,
        "type": "REFERS",
        "target": 4251
      },
      {
        "id": 11562,
        "source": 4236,
        "type": "REFERS",
        "target": 4248
      },
      {
        "id": 11210,
        "source": 4236,
        "type": "REFERS",
        "target": 2841
      },
      {
        "id": 10492,
        "source": 4236,
        "type": "HAS_APART",
        "target": 4244
      },
      {
        "id": 10490,
        "source": 4236,
        "type": "HAS_APART",
        "target": 4243
      },
      {
        "id": 10488,
        "source": 4236,
        "type": "HAS_APART",
        "target": 4242
      },
      {
        "id": 10486,
        "source": 4236,
        "type": "HAS_APART",
        "target": 4241
      },
      {
        "id": 10484,
        "source": 4236,
        "type": "HAS_APART",
        "target": 4240
      },
      {
        "id": 10482,
        "source": 4236,
        "type": "HAS_APART",
        "target": 4239
      },
      {
        "id": 10480,
        "source": 4236,
        "type": "HAS_APART",
        "target": 4238
      },
      {
        "id": 10478,
        "source": 4236,
        "type": "HAS_APART",
        "target": 4237
      },
      {
        "id": 10476,
        "source": 4236,
        "type": "HAS_ELEMENT",
        "target": 4203
      },
      {
        "id": 10474,
        "source": 4235,
        "type": "HAS_ELEMENT",
        "target": 4203
      },
      {
        "id": 10472,
        "source": 4234,
        "type": "HAS_APART",
        "target": 4229
      },
      {
        "id": 10470,
        "source": 4233,
        "type": "HAS_APART",
        "target": 4229
      },
      {
        "id": 10468,
        "source": 4232,
        "type": "HAS_APART",
        "target": 4229
      },
      {
        "id": 10466,
        "source": 4231,
        "type": "HAS_APART",
        "target": 4229
      },
      {
        "id": 10464,
        "source": 4230,
        "type": "HAS_APART",
        "target": 4229
      },
      {
        "id": 10472,
        "source": 4229,
        "type": "HAS_APART",
        "target": 4234
      },
      {
        "id": 10470,
        "source": 4229,
        "type": "HAS_APART",
        "target": 4233
      },
      {
        "id": 10468,
        "source": 4229,
        "type": "HAS_APART",
        "target": 4232
      },
      {
        "id": 10466,
        "source": 4229,
        "type": "HAS_APART",
        "target": 4231
      },
      {
        "id": 10464,
        "source": 4229,
        "type": "HAS_APART",
        "target": 4230
      },
      {
        "id": 10462,
        "source": 4229,
        "type": "HAS_ELEMENT",
        "target": 4203
      },
      {
        "id": 10460,
        "source": 4228,
        "type": "HAS_APART",
        "target": 4223
      },
      {
        "id": 10458,
        "source": 4227,
        "type": "HAS_APART",
        "target": 4223
      },
      {
        "id": 10456,
        "source": 4226,
        "type": "HAS_APART",
        "target": 4223
      },
      {
        "id": 10454,
        "source": 4225,
        "type": "HAS_APART",
        "target": 4223
      },
      {
        "id": 10452,
        "source": 4224,
        "type": "HAS_APART",
        "target": 4223
      },
      {
        "id": 10460,
        "source": 4223,
        "type": "HAS_APART",
        "target": 4228
      },
      {
        "id": 10458,
        "source": 4223,
        "type": "HAS_APART",
        "target": 4227
      },
      {
        "id": 10456,
        "source": 4223,
        "type": "HAS_APART",
        "target": 4226
      },
      {
        "id": 10454,
        "source": 4223,
        "type": "HAS_APART",
        "target": 4225
      },
      {
        "id": 10452,
        "source": 4223,
        "type": "HAS_APART",
        "target": 4224
      },
      {
        "id": 10450,
        "source": 4223,
        "type": "HAS_APART",
        "target": 4220
      },
      {
        "id": 10448,
        "source": 4222,
        "type": "HAS_APART",
        "target": 4220
      },
      {
        "id": 10446,
        "source": 4221,
        "type": "HAS_APART",
        "target": 4220
      },
      {
        "id": 11561,
        "source": 4220,
        "type": "REFERS",
        "target": 4176
      },
      {
        "id": 10450,
        "source": 4220,
        "type": "HAS_APART",
        "target": 4223
      },
      {
        "id": 10448,
        "source": 4220,
        "type": "HAS_APART",
        "target": 4222
      },
      {
        "id": 10446,
        "source": 4220,
        "type": "HAS_APART",
        "target": 4221
      },
      {
        "id": 10444,
        "source": 4220,
        "type": "HAS_ELEMENT",
        "target": 4203
      },
      {
        "id": 10442,
        "source": 4219,
        "type": "HAS_APART",
        "target": 4218
      },
      {
        "id": 11560,
        "source": 4218,
        "type": "REFERS",
        "target": 2655
      },
      {
        "id": 10442,
        "source": 4218,
        "type": "HAS_APART",
        "target": 4219
      },
      {
        "id": 10440,
        "source": 4218,
        "type": "HAS_ELEMENT",
        "target": 4203
      },
      {
        "id": 10438,
        "source": 4217,
        "type": "HAS_APART",
        "target": 4211
      },
      {
        "id": 10436,
        "source": 4216,
        "type": "HAS_APART",
        "target": 4212
      },
      {
        "id": 10434,
        "source": 4215,
        "type": "HAS_APART",
        "target": 4212
      },
      {
        "id": 10432,
        "source": 4214,
        "type": "HAS_APART",
        "target": 4212
      },
      {
        "id": 10430,
        "source": 4213,
        "type": "HAS_APART",
        "target": 4212
      },
      {
        "id": 10436,
        "source": 4212,
        "type": "HAS_APART",
        "target": 4216
      },
      {
        "id": 10434,
        "source": 4212,
        "type": "HAS_APART",
        "target": 4215
      },
      {
        "id": 10432,
        "source": 4212,
        "type": "HAS_APART",
        "target": 4214
      },
      {
        "id": 10430,
        "source": 4212,
        "type": "HAS_APART",
        "target": 4213
      },
      {
        "id": 10428,
        "source": 4212,
        "type": "HAS_APART",
        "target": 4211
      },
      {
        "id": 11559,
        "source": 4211,
        "type": "REFERS",
        "target": 975
      },
      {
        "id": 11558,
        "source": 4211,
        "type": "REFERS",
        "target": 1932
      },
      {
        "id": 11557,
        "source": 4211,
        "type": "REFERS",
        "target": 975
      },
      {
        "id": 11556,
        "source": 4211,
        "type": "REFERS",
        "target": 4209
      },
      {
        "id": 10438,
        "source": 4211,
        "type": "HAS_APART",
        "target": 4217
      },
      {
        "id": 10428,
        "source": 4211,
        "type": "HAS_APART",
        "target": 4212
      },
      {
        "id": 10426,
        "source": 4211,
        "type": "HAS_ELEMENT",
        "target": 4203
      },
      {
        "id": 10424,
        "source": 4210,
        "type": "HAS_APART",
        "target": 4209
      },
      {
        "id": 11556,
        "source": 4209,
        "type": "REFERS",
        "target": 4211
      },
      {
        "id": 11555,
        "source": 4209,
        "type": "REFERS",
        "target": 4205
      },
      {
        "id": 11554,
        "source": 4209,
        "type": "REFERS",
        "target": 3
      },
      {
        "id": 10424,
        "source": 4209,
        "type": "HAS_APART",
        "target": 4210
      },
      {
        "id": 10422,
        "source": 4209,
        "type": "HAS_ELEMENT",
        "target": 4203
      },
      {
        "id": 10420,
        "source": 4208,
        "type": "HAS_APART",
        "target": 4205
      },
      {
        "id": 10418,
        "source": 4207,
        "type": "HAS_APART",
        "target": 4205
      },
      {
        "id": 10416,
        "source": 4206,
        "type": "HAS_APART",
        "target": 4205
      },
      {
        "id": 11555,
        "source": 4205,
        "type": "REFERS",
        "target": 4209
      },
      {
        "id": 11553,
        "source": 4205,
        "type": "REFERS",
        "target": 1932
      },
      {
        "id": 11552,
        "source": 4205,
        "type": "REFERS",
        "target": 1932
      },
      {
        "id": 10420,
        "source": 4205,
        "type": "HAS_APART",
        "target": 4208
      },
      {
        "id": 10418,
        "source": 4205,
        "type": "HAS_APART",
        "target": 4207
      },
      {
        "id": 10416,
        "source": 4205,
        "type": "HAS_APART",
        "target": 4206
      },
      {
        "id": 10414,
        "source": 4205,
        "type": "HAS_ELEMENT",
        "target": 4203
      },
      {
        "id": 11550,
        "source": 4204,
        "type": "REFERS",
        "target": 4030
      },
      {
        "id": 10717,
        "source": 4204,
        "type": "REFERS",
        "target": 706
      },
      {
        "id": 10412,
        "source": 4204,
        "type": "HAS_ELEMENT",
        "target": 4203
      },
      {
        "id": 10558,
        "source": 4203,
        "type": "HAS_ELEMENT",
        "target": 4276
      },
      {
        "id": 10556,
        "source": 4203,
        "type": "HAS_ELEMENT",
        "target": 4275
      },
      {
        "id": 10554,
        "source": 4203,
        "type": "HAS_ELEMENT",
        "target": 4274
      },
      {
        "id": 10547,
        "source": 4203,
        "type": "HAS_ELEMENT",
        "target": 4271
      },
      {
        "id": 10545,
        "source": 4203,
        "type": "HAS_ELEMENT",
        "target": 4270
      },
      {
        "id": 10543,
        "source": 4203,
        "type": "HAS_ELEMENT",
        "target": 4269
      },
      {
        "id": 10541,
        "source": 4203,
        "type": "HAS_ELEMENT",
        "target": 4268
      },
      {
        "id": 10521,
        "source": 4203,
        "type": "HAS_ELEMENT",
        "target": 4258
      },
      {
        "id": 10519,
        "source": 4203,
        "type": "HAS_ELEMENT",
        "target": 4257
      },
      {
        "id": 10515,
        "source": 4203,
        "type": "HAS_ELEMENT",
        "target": 4255
      },
      {
        "id": 10506,
        "source": 4203,
        "type": "HAS_ELEMENT",
        "target": 4251
      },
      {
        "id": 10500,
        "source": 4203,
        "type": "HAS_ELEMENT",
        "target": 4248
      },
      {
        "id": 10476,
        "source": 4203,
        "type": "HAS_ELEMENT",
        "target": 4236
      },
      {
        "id": 10474,
        "source": 4203,
        "type": "HAS_ELEMENT",
        "target": 4235
      },
      {
        "id": 10462,
        "source": 4203,
        "type": "HAS_ELEMENT",
        "target": 4229
      },
      {
        "id": 10444,
        "source": 4203,
        "type": "HAS_ELEMENT",
        "target": 4220
      },
      {
        "id": 10440,
        "source": 4203,
        "type": "HAS_ELEMENT",
        "target": 4218
      },
      {
        "id": 10426,
        "source": 4203,
        "type": "HAS_ELEMENT",
        "target": 4211
      },
      {
        "id": 10422,
        "source": 4203,
        "type": "HAS_ELEMENT",
        "target": 4209
      },
      {
        "id": 10414,
        "source": 4203,
        "type": "HAS_ELEMENT",
        "target": 4205
      },
      {
        "id": 10412,
        "source": 4203,
        "type": "HAS_ELEMENT",
        "target": 4204
      },
      {
        "id": 10410,
        "source": 4203,
        "type": "HAS_ELEMENT",
        "target": 3488
      },
      {
        "id": 11551,
        "source": 4202,
        "type": "REFERS",
        "target": 4030
      },
      {
        "id": 10716,
        "source": 4202,
        "type": "REFERS",
        "target": 706
      },
      {
        "id": 10408,
        "source": 4202,
        "type": "HAS_ELEMENT",
        "target": 4191
      },
      {
        "id": 10405,
        "source": 4201,
        "type": "HAS_APART",
        "target": 4171
      },
      {
        "id": 10403,
        "source": 4200,
        "type": "HAS_APART",
        "target": 4171
      },
      {
        "id": 10401,
        "source": 4199,
        "type": "HAS_APART",
        "target": 4171
      },
      {
        "id": 10379,
        "source": 4198,
        "type": "HAS_APART",
        "target": 4171
      },
      {
        "id": 10377,
        "source": 4197,
        "type": "HAS_APART",
        "target": 4171
      },
      {
        "id": 10375,
        "source": 4196,
        "type": "HAS_APART",
        "target": 4171
      },
      {
        "id": 10384,
        "source": 4175,
        "type": "HAS_APART",
        "target": 4171
      },
      {
        "id": 10382,
        "source": 4174,
        "type": "HAS_APART",
        "target": 4171
      },
      {
        "id": 10380,
        "source": 4173,
        "type": "HAS_APART",
        "target": 4171
      },
      {
        "id": 10406,
        "source": 4172,
        "type": "HAS_APART",
        "target": 4171
      },
      {
        "id": 10338,
        "source": 4172,
        "type": "HAS_APART",
        "target": 4171
      },
      {
        "id": 11549,
        "source": 4171,
        "type": "REFERS",
        "target": 4065
      },
      {
        "id": 10405,
        "source": 4171,
        "type": "HAS_APART",
        "target": 4201
      },
      {
        "id": 10406,
        "source": 4171,
        "type": "HAS_APART",
        "target": 4172
      },
      {
        "id": 10403,
        "source": 4171,
        "type": "HAS_APART",
        "target": 4200
      },
      {
        "id": 10401,
        "source": 4171,
        "type": "HAS_APART",
        "target": 4199
      },
      {
        "id": 10379,
        "source": 4171,
        "type": "HAS_APART",
        "target": 4198
      },
      {
        "id": 10377,
        "source": 4171,
        "type": "HAS_APART",
        "target": 4197
      },
      {
        "id": 10375,
        "source": 4171,
        "type": "HAS_APART",
        "target": 4196
      },
      {
        "id": 10384,
        "source": 4171,
        "type": "HAS_APART",
        "target": 4175
      },
      {
        "id": 10382,
        "source": 4171,
        "type": "HAS_APART",
        "target": 4174
      },
      {
        "id": 10380,
        "source": 4171,
        "type": "HAS_APART",
        "target": 4173
      },
      {
        "id": 10338,
        "source": 4171,
        "type": "HAS_APART",
        "target": 4172
      },
      {
        "id": 10336,
        "source": 4171,
        "type": "HAS_ELEMENT",
        "target": 4191
      }
    ]
  }
  
  const newData = {
    "nodes" : datos.nodes.map(element =>    ({
      "data" : element
    })

    ), 
    "edges" : datos.edges.map(element => ({
      "data" : element
    }))
  }

  const layout= {
    name: 'cose',//concentric
    animate: 'end',
    animationEasing: 'ease-in-out',
  }

  const style = {
    width: '1280px', 
    height: '720px' 
  }

  const stylesheet = [
    {
      selector: 'node',
      style: {
        'background-color' : '#00ACAB',
        'label': 'data(name)',
        'font-size' : '8',
        'font-weight': 'bold',
        'border-width': '1',
        'border-style' : 'dotted',
        'border-color' : '#906DB1',
        'text-valign': 'center',
        'text-halign': 'center',
        'overlay-padding': '6px',
        'text-outline-width': 1.5,
	      'text-outline-color': '#fff',
	      'text-outline-opacity': 1,
      }
    },
    {
      selector: 'edge',
      style: {
        'width': '2.5',
        'curve-style': 'bezier',
        'target-arrow-shape': 'triangle',
        'target-arrow-color': 'black',
        'line-color' : '#a6a6a6',
        'opacity': '0.5',
        'label': 'data(type)',
      }
    },
    {
      "selector": "node:selected",
      "style": {
        "border-width": "6px",
        "border-color": "#00ACAB",
        "border-opacity": "0.5",
        "background-color": "#906DB1",
      }
    }
  ]

  
    return <CytoscapeComponent 
    cy={(cy) => { this.cy = cy }}
    elements={CytoscapeComponent.normalizeElements(newData)} 
    style={style} 
    layout={layout}
    stylesheet={stylesheet}
    />;
  }
}

export default App;