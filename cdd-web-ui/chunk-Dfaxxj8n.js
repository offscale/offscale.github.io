import{$r as yj,$t as W$1,A as Er$1,Bn as gg,C as Dl,Cr as pg,D as Eg,Dn as cs$1,En as cn,Et as Ql,F as GD,Ft as Sb,Gr as vl,Gt as Um,Hr as vb,Ht as U,It as Se,Jn as ib,Kn as hs$1,L as Ge,Mn as ei,Mr as rd,Nn as es$1,Nr as sb,O as Ej,Pn as fe$1,Qn as je,Qr as xu,St as Pm,Tr as pw,Un as gw,Ut as UD,Vr as uu,Wr as vj,X as J$1,Yn as ie,Yt as Vh,Zr as xr$1,_ as C,_n as _g,_t as Oi$1,at as Lm,b as Cm,cn as Yt,ct as M$1,dr as mc$1,ei as yl,f as Bh,fn as ZE,ft as Nd,gt as Oh,h as Bu,in as Xw,kn as dg,kt as RE,lr as ls$1,mr as ml$1,n as $h,nr as k$1,o as Ah,on as Yi$1,or as ko$1,p as Bm,qr as wj,s as Am,sr as le,st as Lr$1,ti as yn,tr as jy,u as BD,un as Z$1,vr as nd,wr as ps$1,x as Cw,xr as ob,yt as Pb,zr as ug}from"./chunk-DHT8ZEYF.js";import{S as ut,_ as mo$1,b as ru,c as Nn,m as ar$1,v as ot}from"./chunk-pthMYBd5.js";import{t as B$1}from"./chunk-BcwooRlm.js";import{D as ft,H as yr$1,L as p,R as pi$1,U as yt,W as zt$1,_ as Qo$1,a as G$1,c as It$1,d as Ni$1,g as Qe$1,h as Pt$1,l as Kt$1,m as Pn,x as Xn,y as Rn}from"./chunk-COBiy1az.js";import{C as qe,D as tt$1,T as re,c as Ne$1,d as Ve$1,f as We,g as ii,l as Qe$2,n as Ce,t as $e,w as qt$1,x as nt$1,y as ke}from"./chunk-DN4-FxSO.js";import{F as i,K as tn,Q as z,i as B$2,k as be$1,p as K}from"./chunk-D8vinDyZ.js";var D=e=>e.workspace;var oi=e=>e.fileTree;var de=e=>e.openApi;var bc=tn(D,e=>e.orientation);var Sc=tn(D,e=>e.isExecuting);var Ec=tn(D,e=>e.executionError);tn(D,e=>e.isOnlineMode);var kr=tn(D,e=>e.selectedLanguageId);var wc=tn(D,e=>e.target);var xr=tn(D,e=>e.languageOptions);var Cc=tn(kr,xr,(e,n)=>n[e]||{});var ai=tn(oi,e=>e.files);var Or=tn(oi,e=>e.activeFilePath);var Ac=tn(ai,Or,(e,n)=>{if(!n)return null;let t=e.find(i=>i.path===n);return t?new TextDecoder().decode(t.content):null});var Tc=tn(de,e=>e.specContent);tn(de,e=>e.validationErrors);var xc=tn(de,e=>e.inputFormat);var Oc=tn(de,e=>e.activeInputMode);var si=tn(de,e=>e.specUrls);var Nc=tn(de,e=>e.isFetchingUrls);tn(si,e=>e.filter(n=>n.url.trim().length>0).length);tn(si,e=>e.filter(n=>!!n.error).map(n=>n.error));var Rc=tn(D,e=>e.isApiDocsVisible);var Pc=tn(D,e=>e.apiDocsPaneHeight);tn(D,e=>e.apiDocsLoadState);var Fc=tn(D,e=>e?.docsJsonLanguageId);var Nr=tn(D,e=>e?.docsJsonFiles?e.docsJsonLanguageId&&e.docsJsonLanguageId!==e.selectedLanguageId?[]:e.docsJsonFiles:[]);var Bc=tn(Nr,ai,(e,n)=>e.length>0?e:n.filter(t=>t.path===`docs.json`||t.path.endsWith(`/docs.json`)));var $c=`openapi: 3.0.4
info:
  title: Swagger Petstore - OpenAPI 3.0
  description: |-
    This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about
    Swagger at [https://swagger.io](https://swagger.io). In the third iteration of the pet store, we've switched to the design first approach!
    You can now help us improve the API whether it's by making changes to the definition itself or to the code.
    That way, with time, we can improve the API in general, and expose some of the new features in OAS3.

    Some useful links:
    - [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)
    - [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)
  termsOfService: https://swagger.io/terms/
  contact:
    email: apiteam@swagger.io
  license:
    name: Apache 2.0
    url: https://www.apache.org/licenses/LICENSE-2.0.html
  version: 1.0.27
externalDocs:
  description: Find out more about Swagger
  url: https://swagger.io
servers:
- url: /api/v3
tags:
- name: pet
  description: Everything about your Pets
  externalDocs:
    description: Find out more
    url: https://swagger.io
- name: store
  description: Access to Petstore orders
  externalDocs:
    description: Find out more about our store
    url: https://swagger.io
- name: user
  description: Operations about user
paths:
  /pet:
    put:
      tags:
      - pet
      summary: Update an existing pet.
      description: Update an existing pet by Id.
      operationId: updatePet
      requestBody:
        description: Update an existent pet in the store
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Pet'
          application/xml:
            schema:
              $ref: '#/components/schemas/Pet'
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/Pet'
        required: true
      responses:
        "200":
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Pet'
            application/xml:
              schema:
                $ref: '#/components/schemas/Pet'
        "400":
          description: Invalid ID supplied
        "404":
          description: Pet not found
        "422":
          description: Validation exception
        default:
          description: Unexpected error
      security:
      - petstore_auth:
        - write:pets
        - read:pets
    post:
      tags:
      - pet
      summary: Add a new pet to the store.
      description: Add a new pet to the store.
      operationId: addPet
      requestBody:
        description: Create a new pet in the store
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Pet'
          application/xml:
            schema:
              $ref: '#/components/schemas/Pet'
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/Pet'
        required: true
      responses:
        "200":
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Pet'
            application/xml:
              schema:
                $ref: '#/components/schemas/Pet'
        "400":
          description: Invalid input
        "422":
          description: Validation exception
        default:
          description: Unexpected error
      security:
      - petstore_auth:
        - write:pets
        - read:pets
  /pet/findByStatus:
    get:
      tags:
      - pet
      summary: Finds Pets by status.
      description: Multiple status values can be provided with comma separated strings.
      operationId: findPetsByStatus
      parameters:
      - name: status
        in: query
        description: Status values that need to be considered for filter
        required: true
        explode: true
        schema:
          type: string
          default: available
          enum:
          - available
          - pending
          - sold
      responses:
        "200":
          description: successful operation
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Pet'
            application/xml:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Pet'
        "400":
          description: Invalid status value
        default:
          description: Unexpected error
      security:
      - petstore_auth:
        - write:pets
        - read:pets
  /pet/findByTags:
    get:
      tags:
      - pet
      summary: Finds Pets by tags.
      description: "Multiple tags can be provided with comma separated strings. Use$
         tag1, tag2, tag3 for testing."
      operationId: findPetsByTags
      parameters:
      - name: tags
        in: query
        description: Tags to filter by
        required: true
        explode: true
        schema:
          type: array
          items:
            type: string
      responses:
        "200":
          description: successful operation
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Pet'
            application/xml:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Pet'
        "400":
          description: Invalid tag value
        default:
          description: Unexpected error
      security:
      - petstore_auth:
        - write:pets
        - read:pets
  /pet/{petId}:
    get:
      tags:
      - pet
      summary: Find pet by ID.
      description: Returns a single pet.
      operationId: getPetById
      parameters:
      - name: petId
        in: path
        description: ID of pet to return
        required: true
        schema:
          type: integer
          format: int64
      responses:
        "200":
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Pet'
            application/xml:
              schema:
                $ref: '#/components/schemas/Pet'
        "400":
          description: Invalid ID supplied
        "404":
          description: Pet not found
        default:
          description: Unexpected error
      security:
      - api_key: []
      - petstore_auth:
        - write:pets
        - read:pets
    post:
      tags:
      - pet
      summary: Updates a pet in the store with form data.
      description: Updates a pet resource based on the form data.
      operationId: updatePetWithForm
      parameters:
      - name: petId
        in: path
        description: ID of pet that needs to be updated
        required: true
        schema:
          type: integer
          format: int64
      - name: name
        in: query
        description: Name of pet that needs to be updated
        schema:
          type: string
      - name: status
        in: query
        description: Status of pet that needs to be updated
        schema:
          type: string
      responses:
        "200":
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Pet'
            application/xml:
              schema:
                $ref: '#/components/schemas/Pet'
        "400":
          description: Invalid input
        default:
          description: Unexpected error
      security:
      - petstore_auth:
        - write:pets
        - read:pets
    delete:
      tags:
      - pet
      summary: Deletes a pet.
      description: Delete a pet.
      operationId: deletePet
      parameters:
      - name: api_key
        in: header
        description: ""
        required: false
        schema:
          type: string
      - name: petId
        in: path
        description: Pet id to delete
        required: true
        schema:
          type: integer
          format: int64
      responses:
        "200":
          description: Pet deleted
        "400":
          description: Invalid pet value
        default:
          description: Unexpected error
      security:
      - petstore_auth:
        - write:pets
        - read:pets
  /pet/{petId}/uploadImage:
    post:
      tags:
      - pet
      summary: Uploads an image.
      description: Upload image of the pet.
      operationId: uploadFile
      parameters:
      - name: petId
        in: path
        description: ID of pet to update
        required: true
        schema:
          type: integer
          format: int64
      - name: additionalMetadata
        in: query
        description: Additional Metadata
        required: false
        schema:
          type: string
      requestBody:
        content:
          application/octet-stream:
            schema:
              type: string
              format: binary
      responses:
        "200":
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ApiResponse'
        "400":
          description: No file uploaded
        "404":
          description: Pet not found
        default:
          description: Unexpected error
      security:
      - petstore_auth:
        - write:pets
        - read:pets
  /store/inventory:
    get:
      tags:
      - store
      summary: Returns pet inventories by status.
      description: Returns a map of status codes to quantities.
      operationId: getInventory
      responses:
        "200":
          description: successful operation
          content:
            application/json:
              schema:
                type: object
                additionalProperties:
                  type: integer
                  format: int32
        default:
          description: Unexpected error
      security:
      - api_key: []
  /store/order:
    post:
      tags:
      - store
      summary: Place an order for a pet.
      description: Place a new order in the store.
      operationId: placeOrder
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Order'
          application/xml:
            schema:
              $ref: '#/components/schemas/Order'
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/Order'
      responses:
        "200":
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Order'
        "400":
          description: Invalid input
        "422":
          description: Validation exception
        default:
          description: Unexpected error
  /store/order/{orderId}:
    get:
      tags:
      - store
      summary: Find purchase order by ID.
      description: For valid response try integer IDs with value <= 5 or > 10. Other
        values will generate exceptions.
      operationId: getOrderById
      parameters:
      - name: orderId
        in: path
        description: ID of order that needs to be fetched
        required: true
        schema:
          type: integer
          format: int64
      responses:
        "200":
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Order'
            application/xml:
              schema:
                $ref: '#/components/schemas/Order'
        "400":
          description: Invalid ID supplied
        "404":
          description: Order not found
        default:
          description: Unexpected error
    delete:
      tags:
      - store
      summary: Delete purchase order by identifier.
      description: For valid response try integer IDs with value < 1000. Anything
        above 1000 or non-integers will generate API errors.
      operationId: deleteOrder
      parameters:
      - name: orderId
        in: path
        description: ID of the order that needs to be deleted
        required: true
        schema:
          type: integer
          format: int64
      responses:
        "200":
          description: order deleted
        "400":
          description: Invalid ID supplied
        "404":
          description: Order not found
        default:
          description: Unexpected error
  /user:
    post:
      tags:
      - user
      summary: Create user.
      description: This can only be done by the logged in user.
      operationId: createUser
      requestBody:
        description: Created user object
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/User'
          application/xml:
            schema:
              $ref: '#/components/schemas/User'
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/User'
      responses:
        "200":
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
            application/xml:
              schema:
                $ref: '#/components/schemas/User'
        default:
          description: Unexpected error
  /user/createWithList:
    post:
      tags:
      - user
      summary: Creates list of users with given input array.
      description: Creates list of users with given input array.
      operationId: createUsersWithListInput
      requestBody:
        content:
          application/json:
            schema:
              type: array
              items:
                $ref: '#/components/schemas/User'
      responses:
        "200":
          description: Successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
            application/xml:
              schema:
                $ref: '#/components/schemas/User'
        default:
          description: Unexpected error
  /user/login:
    get:
      tags:
      - user
      summary: Logs user into the system.
      description: Log into the system.
      operationId: loginUser
      parameters:
      - name: username
        in: query
        description: The user name for login
        required: false
        schema:
          type: string
      - name: password
        in: query
        description: The password for login in clear text
        required: false
        schema:
          type: string
      responses:
        "200":
          description: successful operation
          headers:
            X-Rate-Limit:
              description: calls per hour allowed by the user
              schema:
                type: integer
                format: int32
            X-Expires-After:
              description: date in UTC when token expires
              schema:
                type: string
                format: date-time
          content:
            application/xml:
              schema:
                type: string
            application/json:
              schema:
                type: string
        "400":
          description: Invalid username/password supplied
        default:
          description: Unexpected error
  /user/logout:
    get:
      tags:
      - user
      summary: Logs out current logged in user session.
      description: Log user out of the system.
      operationId: logoutUser
      parameters: []
      responses:
        "200":
          description: successful operation
        default:
          description: Unexpected error
  /user/{username}:
    get:
      tags:
      - user
      summary: Get user by user name.
      description: Get user detail based on username.
      operationId: getUserByName
      parameters:
      - name: username
        in: path
        description: The name that needs to be fetched. Use user1 for testing
        required: true
        schema:
          type: string
      responses:
        "200":
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
            application/xml:
              schema:
                $ref: '#/components/schemas/User'
        "400":
          description: Invalid username supplied
        "404":
          description: User not found
        default:
          description: Unexpected error
    put:
      tags:
      - user
      summary: Update user resource.
      description: This can only be done by the logged in user.
      operationId: updateUser
      parameters:
      - name: username
        in: path
        description: name that need to be deleted
        required: true
        schema:
          type: string
      requestBody:
        description: Update an existent user in the store
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/User'
          application/xml:
            schema:
              $ref: '#/components/schemas/User'
          application/x-www-form-urlencoded:
            schema:
              $ref: '#/components/schemas/User'
      responses:
        "200":
          description: successful operation
        "400":
          description: bad request
        "404":
          description: user not found
        default:
          description: Unexpected error
    delete:
      tags:
      - user
      summary: Delete user resource.
      description: This can only be done by the logged in user.
      operationId: deleteUser
      parameters:
      - name: username
        in: path
        description: The name that needs to be deleted
        required: true
        schema:
          type: string
      responses:
        "200":
          description: User deleted
        "400":
          description: Invalid username supplied
        "404":
          description: User not found
        default:
          description: Unexpected error
components:
  schemas:
    Order:
      type: object
      properties:
        id:
          type: integer
          format: int64
          example: 10
        petId:
          type: integer
          format: int64
          example: 198772
        quantity:
          type: integer
          format: int32
          example: 7
        shipDate:
          type: string
          format: date-time
        status:
          type: string
          description: Order Status
          example: approved
          enum:
          - placed
          - approved
          - delivered
        complete:
          type: boolean
      xml:
        name: order
    Category:
      type: object
      properties:
        id:
          type: integer
          format: int64
          example: 1
        name:
          type: string
          example: Dogs
      xml:
        name: category
    User:
      type: object
      properties:
        id:
          type: integer
          format: int64
          example: 10
        username:
          type: string
          example: theUser
        firstName:
          type: string
          example: John
        lastName:
          type: string
          example: James
        email:
          type: string
          example: john@email.com
        password:
          type: string
          example: "12345"
        phone:
          type: string
          example: "12345"
        userStatus:
          type: integer
          description: User Status
          format: int32
          example: 1
      xml:
        name: user
    Tag:
      type: object
      properties:
        id:
          type: integer
          format: int64
        name:
          type: string
      xml:
        name: tag
    Pet:
      required:
      - name
      - photoUrls
      type: object
      properties:
        id:
          type: integer
          format: int64
          example: 10
        name:
          type: string
          example: doggie
        category:
          $ref: '#/components/schemas/Category'
        photoUrls:
          type: array
          xml:
            wrapped: true
          items:
            type: string
            xml:
              name: photoUrl
        tags:
          type: array
          xml:
            wrapped: true
          items:
            $ref: '#/components/schemas/Tag'
        status:
          type: string
          description: pet status in the store
          enum:
          - available
          - pending
          - sold
      xml:
        name: pet
    ApiResponse:
      type: object
      properties:
        code:
          type: integer
          format: int32
        type:
          type: string
        message:
          type: string
      xml:
        name: '##default'
  requestBodies:
    Pet:
      description: Pet object that needs to be added to the store
      content:
        application/json:
          schema:
            $ref: '#/components/schemas/Pet'
        application/xml:
          schema:
            $ref: '#/components/schemas/Pet'
    UserArray:
      description: List of user object
      content:
        application/json:
          schema:
            type: array
            items:
              $ref: '#/components/schemas/User'
  securitySchemes:
    petstore_auth:
      type: oauth2
      flows:
        implicit:
          authorizationUrl: https://petstore3.swagger.io/oauth/authorize
          scopes:
            write:pets: modify pets in your account
            read:pets: read your pets
    api_key:
      type: apiKey
      name: api_key
      in: header
`;var jc=`openapi: 3.0.0
info:
  # title
  title: Hello World API
  # version
  version: 1.0.0
paths:
  /hello:
    # get
    get:
      summary: Returns a greeting
      responses:
        "200":
          description: A simple greeting
          content:
            text/plain:
              schema:
                type: string
                example: Hello, World!`;var di=new k$1(`NGX_MONACO_EDITOR_CONFIG`);var ci=!1;var li;var Lr=(()=>{class e{constructor(){this.config=C(di),this.insideNg=vj(!1),this.onInit=yj(),this.editorContainer=Ej.required(`editorContainer`),this._models=[],this._listeners=[],Nd(()=>{this.insideNg(),this._editor&&this.reinit()})}ngAfterViewInit(){ci?li.then(()=>{this.initMonaco()}):(ci=!0,li=new Promise(t=>{let i=this.config.baseUrl;if((i===`assets`||!i)&&(i=`./assets/monaco/min/vs`),typeof window.monaco==`object`){this.initMonaco(),t();return}let r=s=>{let c=s||window.require,d={paths:{vs:`${i}`}};Object.assign(d,this.config.requireConfig||{}),c.config(d),c([`vs/editor/editor.main`],()=>{typeof this.config.onMonacoLoad==`function`&&this.config.onMonacoLoad(),this.initMonaco(),t()})};if(this.config.monacoRequire)r(this.config.monacoRequire);else if(window.require)if(window.require.config)r();else{var o=`${i}/loader.js`,a=new XMLHttpRequest;a.addEventListener(`load`,()=>{let s=document.createElement(`script`);s.type=`text/javascript`,s.text=[`var nodeRequire = require;`,a.responseText.replace(`"use strict";`,``),`var monacoAmdRequire = require;`,`require = nodeRequire;`,`require.nodeRequire = require;`].join(`
`),document.body.appendChild(s),r(window.monacoAmdRequire)}),a.open(`GET`,o),a.send()}else{let s=document.createElement(`script`);s.type=`text/javascript`,s.src=`${i}/loader.js`,s.addEventListener(`load`,()=>{r()}),document.body.appendChild(s)}}))}reinit(){this.disposeEditor(),this.initMonaco()}disposeEditor(){this._windowResizeSubscription?.unsubscribe(),this._windowResizeSubscription=void 0,this._listeners.forEach(t=>t.dispose()),this._listeners=[],this._editor?.dispose(),this._editor=void 0,this._models.forEach(t=>t.dispose()),this._models=[]}ngOnDestroy(){this.disposeEditor()}static{this.ɵfac=function(i){return new(i||e)}}static{this.ɵcmp=(function(){let t=[`editorContainer`];return BD({type:e,selectors:[[`ng-component`]],viewQuery:function(r,o){r&1&&gg(o.editorContainer,t,5),r&2&&sb()},inputs:{insideNg:[1,`insideNg`]},outputs:{onInit:`onInit`},standalone:!1,decls:0,vars:0,template:function(r,o){},encapsulation:2,changeDetection:1})})()}}return e})();var Zc=(()=>{class e extends Lr{constructor(){super(),this.zone=C(J$1),this._value=``,this._disabled=!1,this.options=vj({}),this.model=vj(),this.propagateChange=t=>{},this.onTouched=()=>{},Nd(()=>{this.options(),this.model(),this._editor&&this.reinit()})}writeValue(t){this._value=t||``,setTimeout(()=>{this._editor&&!this.model()&&this._editor.setValue(this._value)})}registerOnChange(t){this.propagateChange=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._disabled=t,this._editor?.updateOptions({readOnly:t||!!this.options().readOnly})}setTheme(t){monaco.editor.setTheme(t)}initMonaco(){let t=U(U({},this.config.defaultOptions),this.options());this._disabled&&(t.readOnly=!0);let i=this.model();if(i){let o=i.uri?monaco.editor.getModel(i.uri):null;if(o)o.setValue(this._value),t.model=o;else{let a=monaco.editor.createModel(i.value,i.language,i.uri);this._models.push(a),t.model=a}}let r=this.editorContainer().nativeElement;this.insideNg()?this._editor=monaco.editor.create(r,t):this.zone.runOutsideAngular(()=>{this._editor=monaco.editor.create(r,t)}),t.model||this._editor.setValue(this._value),this._listeners.push(this._editor.onDidChangeModelContent(()=>{let o=this._editor.getValue();this.zone.run(()=>{this.propagateChange(o),this._value=o})})),this._listeners.push(this._editor.onDidBlurEditorWidget(()=>{this.onTouched()})),this._windowResizeSubscription=cs$1(window,`resize`).subscribe(()=>this._editor.layout()),this.onInit.emit(this._editor)}static{this.ɵfac=function(i){return new(i||e)}}static{this.ɵcmp=BD({type:e,selectors:[[`ngx-monaco-editor`]],inputs:{options:[1,`options`],model:[1,`model`]},features:[Pb([{provide:B$1,useExisting:ko$1(()=>e),multi:!0}]),Ah],decls:2,vars:0,consts:[[`editorContainer`,``],[1,`editor-container`]],template:function(i,r){i&1&&$h(0,`div`,1,0)},styles:[`[_nghost-%COMP%]{display:block;height:200px}.editor-container[_ngcontent-%COMP%]{width:100%;height:98%}`]})}}return e})();var el=(()=>{class e{static forRoot(t={}){return{ngModule:e,providers:[{provide:di,useValue:t}]}}static{this.ɵfac=function(i){return new(i||e)}}static{this.ɵmod=UD({type:e})}static{this.ɵinj=xu({imports:[Nn]})}}return e})();var Mr={dispatch:!0,functional:!1,useEffectsErrorHandler:!0};var Ve=`__@ngrx/effects_create__`;function ml(e,n={}){let t=n.functional?e:e(),i=U(U({},Mr),n);return Object.defineProperty(t,Ve,{value:i}),t}function Rr(e){return Object.getOwnPropertyNames(e).filter(i=>e[i]&&e[i].hasOwnProperty(Ve)?e[i][Ve].hasOwnProperty(`dispatch`):!1).map(i=>{let r=e[i][Ve];return U({propertyName:i},r)})}function Pr(e){return Rr(e)}function pi(e){return Object.getPrototypeOf(e)}function Dr(e){return!!e.constructor&&e.constructor.name!==`Object`&&e.constructor.name!==`Function`}function ui(e){return typeof e==`function`}function Fr(e){return e.filter(ui)}function Br(e,n,t){let i=pi(e),o=!!i&&i.constructor.name!==`Object`?i.constructor.name:null,a=Pr(e).map(({propertyName:s,dispatch:c,useEffectsErrorHandler:d})=>{let l=typeof e[s]==`function`?e[s]():e[s],p=d?t(l,n):l;return c===!1?p.pipe(Lm()):p.pipe(Um()).pipe(le(y=>({effect:e[s],notification:y,propertyName:s,sourceName:o,sourceInstance:e})))});return Am(...a)}var Ur=10;function fi(e,n,t=Ur){return e.pipe(ps$1(i=>(n&&n.handleError(i),t<=1?e:fi(e,n,t-1))))}var hl=(()=>{class e extends M$1{constructor(t){super(),t&&(this.source=t)}lift(t){let i=new e;return i.source=this,i.operator=t,i}static{this.ɵfac=function(i){return new(i||e)(Se(K))}}static{this.ɵprov=fe$1({token:e,factory:e.ɵfac,providedIn:`root`})}}return e})();function gl(...e){return cn(n=>e.some(t=>typeof t==`string`?t===n.type:t.type===n.type))}var $r=new k$1(`@ngrx/effects Effects Error Handler`,{providedIn:`root`,factory:()=>fi});var jr=`@ngrx/effects/init`;var Wr=i(jr);function qr(e,n){if(e.notification.kind===`N`){let t=e.notification.value;!Gr(t)&&n.handleError(/* @__PURE__ */ new Error(`Effect ${Vr(e)} dispatched an invalid action: ${Kr(t)}`))}}function Gr(e){return typeof e!=`function`&&e&&e.type&&typeof e.type==`string`}function Vr({propertyName:e,sourceInstance:n,sourceName:t}){let i=typeof n[e]==`function`;return!!t?`"${t}.${String(e)}${i?`()`:``}"`:`"${String(e)}()"`}function Kr(e){try{return JSON.stringify(e)}catch(n){return e}}var zr=`ngrxOnIdentifyEffects`;function Yr(e){return vt(e,zr)}var Hr=`ngrxOnRunEffects`;function Qr(e){return vt(e,Hr)}var Xr=`ngrxOnInitEffects`;function Jr(e){return vt(e,Xr)}function vt(e,n){return e&&n in e&&typeof e[n]==`function`}var mi=(()=>{class e extends Z$1{constructor(t,i){super(),this.errorHandler=t,this.effectsErrorHandler=i}addEffects(t){this.next(t)}toActions(){return this.pipe(Bm(t=>Dr(t)?pi(t):t),je(t=>t.pipe(Bm(Zr))),je(t=>{let i=t.pipe(uu(o=>eo(this.errorHandler,this.effectsErrorHandler)(o)),le(o=>(qr(o,this.errorHandler),o.notification)),cn(o=>o.kind===`N`&&o.value!=null),Pm()),r=t.pipe(hs$1(1),cn(Jr),le(o=>o.ngrxOnInitEffects()));return Am(i,r)}))}static{this.ɵfac=function(i){return new(i||e)(Se(Ge),Se($r))}}static{this.ɵprov=fe$1({token:e,factory:e.ɵfac,providedIn:`root`})}}return e})();function Zr(e){return Yr(e)?e.ngrxOnIdentifyEffects():``}function eo(e,n){return t=>{let i=Br(t,e,n);return Qr(t)?t.ngrxOnRunEffects(i):i}}var to=(()=>{class e{get isStarted(){return!!this.effectsSubscription}constructor(t,i){this.effectSources=t,this.store=i,this.effectsSubscription=null}start(){this.effectsSubscription||(this.effectsSubscription=this.effectSources.toActions().subscribe(this.store))}ngOnDestroy(){this.effectsSubscription&&(this.effectsSubscription.unsubscribe(),this.effectsSubscription=null)}static{this.ɵfac=function(i){return new(i||e)(Se(mi),Se(B$2))}}static{this.ɵprov=fe$1({token:e,factory:e.ɵfac,providedIn:`root`})}}return e})();function _l(...e){let n=e.flat(),t=Fr(n);return yn([t,Bu(()=>{C(z),C(be$1,{optional:!0});let i=C(to),r=C(mi),o=!i.isStarted;o&&i.start();for(let a of n){let s=ui(a)?C(a):a;r.addEffects(s)}o&&C(B$2).dispatch(Wr())})])}var io=20;var ro=new k$1(`mat-tooltip-scroll-strategy`,{providedIn:`root`,factory:()=>{let e=C(ie);return()=>tt$1(e,{scrollThrottle:io})}});var oo=new k$1(`mat-tooltip-default-options`,{providedIn:`root`,factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var hi=`tooltip-panel`;var ao={passive:!0};var so=8;var co=8;var lo=24;var po=200;var uo=(()=>{class e{_elementRef=C(Lr$1);_ngZone=C(J$1);_platform=C(p);_ariaDescriber=C(Qo$1);_focusMonitor=C(ft);_dir=C(Xn);_injector=C(ie);_viewContainerRef=C(Yi$1);_mediaMatcher=C(yt);_document=C(Er$1);_renderer=C(mc$1);_animationsDisabled=G$1();_defaultOptions=C(oo,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position=`below`;_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=gi;_viewportMargin=8;_currentPosition;_cssClassPrefix=`mat-mdc`;_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(t){t!==this._position&&(this._position=t,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(t){this._positionAtOrigin=Ni$1(t),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(t){let i=Ni$1(t);this._disabled!==i&&(this._disabled=i,i?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(t){this._showDelay=Pt$1(t)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(t){this._hideDelay=Pt$1(t),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures=`auto`;get message(){return this._message}set message(t){let i=this._message;this._message=t!=null?String(t).trim():``,!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(i)}_message=``;get tooltipClass(){return this._tooltipClass}set tooltipClass(t){this._tooltipClass=t,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new Z$1;_isDestroyed=!1;constructor(){let t=this._defaultOptions;t&&(this._showDelay=t.showDelay,this._hideDelay=t.hideDelay,t.position&&(this.position=t.position),t.positionAtOrigin&&(this.positionAtOrigin=t.positionAtOrigin),t.touchGestures&&(this.touchGestures=t.touchGestures),t.tooltipClass&&(this.tooltipClass=t.tooltipClass)),this._viewportMargin=so}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(Ql(this._destroyed)).subscribe(t=>{t?t===`keyboard`&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let t=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(i=>i()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(t,this.message,`tooltip`),this._focusMonitor.stopMonitoring(t)}show(t=this.showDelay,i){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let r=this._createOverlay(i);this._detach(),this._portal=this._portal||new Ne$1(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=r.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(Ql(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(t)}hide(t=this.hideDelay){let i=this._tooltipInstance;i&&(i.isVisible()?i.hide(t):(i._cancelPendingAnimations(),this._detach()))}toggle(t){this._isTooltipVisible()?this.hide():this.show(void 0,t)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(t){if(this._overlayRef){let a=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!t)&&a._origin instanceof Lr$1)return this._overlayRef;this._detach()}let i=this._injector.get($e).getAncestorScrollContainers(this._elementRef),r=`${this._cssClassPrefix}-${hi}`,o=qt$1(this._injector,this.positionAtOrigin?t||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(i).withPopoverLocation(`global`);return o.positionChanges.pipe(Ql(this._destroyed)).subscribe(a=>{this._updateCurrentPositionClass(a.connectionPair),this._tooltipInstance&&a.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=nt$1(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,r]:r,scrollStrategy:this._injector.get(ro)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(Ql(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(Ql(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(Ql(this._destroyed)).subscribe(a=>{a.preventDefault(),a.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(Ql(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(t){let i=t.getConfig().positionStrategy,r=this._getOrigin(),o=this._getOverlayPosition();i.withPositions([this._addOffset(U(U({},r.main),o.main)),this._addOffset(U(U({},r.fallback),o.fallback))])}_addOffset(t){let i=co,r=!this._dir||this._dir.value==`ltr`;return t.originY===`top`?t.offsetY=-i:t.originY===`bottom`?t.offsetY=i:t.originX===`start`?t.offsetX=r?-i:i:t.originX===`end`&&(t.offsetX=r?i:-i),t}_getOrigin(){let t=!this._dir||this._dir.value==`ltr`,i=this.position,r;i==`above`||i==`below`?r={originX:`center`,originY:i==`above`?`top`:`bottom`}:i==`before`||i==`left`&&t||i==`right`&&!t?r={originX:`start`,originY:`center`}:(i==`after`||i==`right`&&t||i==`left`&&!t)&&(r={originX:`end`,originY:`center`});let{x:o,y:a}=this._invertPosition(r.originX,r.originY);return{main:r,fallback:{originX:o,originY:a}}}_getOverlayPosition(){let t=!this._dir||this._dir.value==`ltr`,i=this.position,r;i==`above`?r={overlayX:`center`,overlayY:`bottom`}:i==`below`?r={overlayX:`center`,overlayY:`top`}:i==`before`||i==`left`&&t||i==`right`&&!t?r={overlayX:`end`,overlayY:`center`}:(i==`after`||i==`right`&&t||i==`left`&&!t)&&(r={overlayX:`start`,overlayY:`center`});let{x:o,y:a}=this._invertPosition(r.overlayX,r.overlayY);return{main:r,fallback:{overlayX:o,overlayY:a}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),RE(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(t){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=t instanceof Set?Array.from(t):t,this._tooltipInstance._markForCheck())}_invertPosition(t,i){return this.position===`above`||this.position===`below`?i===`top`?i=`bottom`:i===`bottom`&&(i=`top`):t===`end`?t=`start`:t===`start`&&(t=`end`),{x:t,y:i}}_updateCurrentPositionClass(t){let{overlayY:i,originX:r,originY:o}=t,a;if(i===`center`?this._dir&&this._dir.value===`rtl`?a=r===`end`?`left`:`right`:a=r===`start`?`left`:`right`:a=i===`bottom`&&o===`top`?`above`:`below`,a!==this._currentPosition){let s=this._overlayRef;if(s){let c=`${this._cssClassPrefix}-${hi}-`;s.removePanelClass(c+this._currentPosition),s.addPanelClass(c+a)}this._currentPosition=a}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!==`off`&&(this._disableNativeGesturesIfNecessary(),this._addListener(`touchstart`,t=>{let i=t.targetTouches?.[0],r=i?{x:i.clientX,y:i.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,r)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener(`mouseenter`,t=>{this._setupPointerExitEventsIfNeeded();let i;t.x!==void 0&&t.y!==void 0&&(i=t),this.show(void 0,i)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener(`mouseleave`,t=>{let i=t.relatedTarget;(!i||!this._overlayRef?.overlayElement.contains(i))&&this.hide()}),this._addListener(`wheel`,t=>{if(this._isTooltipVisible()){let i=this._document.elementFromPoint(t.clientX,t.clientY),r=this._elementRef.nativeElement;i!==r&&!r.contains(i)&&this.hide()}});else if(this.touchGestures!==`off`){this._disableNativeGesturesIfNecessary();let t=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener(`touchend`,t),this._addListener(`touchcancel`,t)}}}_addListener(t,i){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,t,i,ao))}_isTouchPlatform(){let t=this._defaultOptions?.detectHoverCapability;return typeof t==`function`?!t():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!t&&this._mediaMatcher.matchMedia(`(any-hover: none)`).matches:!1}_disableNativeGesturesIfNecessary(){let t=this.touchGestures;if(t!==`off`){let i=this._elementRef.nativeElement,r=i.style;(t===`on`||i.nodeName!==`INPUT`&&i.nodeName!==`TEXTAREA`)&&(r.userSelect=r.msUserSelect=r.webkitUserSelect=r.MozUserSelect=`none`),(t===`on`||!i.draggable)&&(r.webkitUserDrag=`none`),r.touchAction=`none`,r.webkitTapHighlightColor=`transparent`}}_syncAriaDescription(t){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,t,`tooltip`),this._isDestroyed||RE({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,`tooltip`)}},{injector:this._injector}))}_overlayEventPredicate=t=>t.type===`keydown`?this._isTooltipVisible()&&t.keyCode===27&&!Qe$1(t):!0;static ɵfac=function(i){return new(i||e)};static ɵdir=GD({type:e,selectors:[[``,`matTooltip`,``]],hostAttrs:[1,`mat-mdc-tooltip-trigger`],hostVars:2,hostBindings:function(i,r){i&2&&Eg(`mat-mdc-tooltip-disabled`,r.disabled)},inputs:{position:[0,`matTooltipPosition`,`position`],positionAtOrigin:[0,`matTooltipPositionAtOrigin`,`positionAtOrigin`],disabled:[0,`matTooltipDisabled`,`disabled`],showDelay:[0,`matTooltipShowDelay`,`showDelay`],hideDelay:[0,`matTooltipHideDelay`,`hideDelay`],touchGestures:[0,`matTooltipTouchGestures`,`touchGestures`],message:[0,`matTooltip`,`message`],tooltipClass:[0,`matTooltipClass`,`tooltipClass`]},exportAs:[`matTooltip`]})}return e})();var gi=(()=>{class e{_changeDetectorRef=C(wj);_elementRef=C(Lr$1);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=G$1();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new Z$1;_showAnimation=`mat-mdc-tooltip-show`;_hideAnimation=`mat-mdc-tooltip-hide`;show(t){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},t)}hide(t){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},t)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:t}){(!t||!this._triggerElement.contains(t))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let t=this._elementRef.nativeElement.getBoundingClientRect();return t.height>lo&&t.width>=po}_handleAnimationEnd({animationName:t}){(t===this._showAnimation||t===this._hideAnimation)&&this._finalizeAnimation(t===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(t){t?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(t){let i=this._tooltip.nativeElement,r=this._showAnimation,o=this._hideAnimation;if(i.classList.remove(t?o:r),i.classList.add(t?r:o),this._isVisible!==t&&(this._isVisible=t,this._changeDetectorRef.markForCheck()),t&&!this._animationsDisabled&&typeof getComputedStyle==`function`){let a=getComputedStyle(i);(a.getPropertyValue(`animation-duration`)===`0s`||a.getPropertyValue(`animation-name`)===`none`)&&(this._animationsDisabled=!0)}t&&this._onShow(),this._animationsDisabled&&(i.classList.add(`_mat-animation-noopable`),this._finalizeAnimation(t))}static ɵfac=function(i){return new(i||e)};static ɵcmp=(function(){let t=[`tooltip`];return BD({type:e,selectors:[[`mat-tooltip-component`]],viewQuery:function(r,o){if(r&1&&pg(t,7),r&2){let a;ob(a=ib())&&(o._tooltip=a.first)}},hostAttrs:[`aria-hidden`,`true`],hostBindings:function(r,o){r&1&&ug(`mouseleave`,function(s){return o._handleMouseLeave(s)})},decls:4,vars:5,consts:[[`tooltip`,``],[1,`mdc-tooltip`,`mat-mdc-tooltip`,3,`animationend`],[1,`mat-mdc-tooltip-surface`,`mdc-tooltip__surface`]],template:function(r,o){r&1&&(yl(0,`div`,1,0),dg(`animationend`,function(s){return o._handleAnimationEnd(s)}),yl(2,`div`,2),Sb(3),vl()()),r&2&&(vb(o.tooltipClass),Eg(`mdc-tooltip--multiline`,o._isMultiline),ZE(3),_g(o.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--%NS%mat-tooltip-container-color, var(--%NS%mat-sys-inverse-surface));
  color: var(--%NS%mat-tooltip-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-tooltip-container-shape, var(--%NS%mat-sys-corner-extra-small));
  font-family: var(--%NS%mat-tooltip-supporting-text-font, var(--%NS%mat-sys-body-small-font));
  font-size: var(--%NS%mat-tooltip-supporting-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-tooltip-supporting-text-weight, var(--%NS%mat-sys-body-small-weight));
  line-height: var(--%NS%mat-tooltip-supporting-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  letter-spacing: var(--%NS%mat-tooltip-supporting-text-tracking, var(--%NS%mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2})})()}return e})();var Gl=(()=>{class e{static ɵfac=function(i){return new(i||e)};static ɵmod=UD({type:e});static ɵinj=xu({imports:[Pn,ke,It$1,qe]})}return e})();var b=Symbol(`NOT_RESOLVED`);function x(e,n){return{tagName:e,nodeKind:`scalar`,implicit:n.implicit??!1,matchByTagPrefix:n.matchByTagPrefix??!1,implicitFirstChars:n.implicitFirstChars??null,resolve:n.resolve,identify:n.identify,represent:n.represent??(t=>String(t)),representTagName:n.representTagName??(()=>e)}}function Ft(e,n){let t=n.finalize===void 0;return{tagName:e,nodeKind:`sequence`,implicit:!1,matchByTagPrefix:n.matchByTagPrefix??!1,create:n.create,addItem:n.addItem,finalize:n.finalize??(i=>i),carrierIsResult:t,identify:n.identify,represent:n.represent??(i=>i),representTagName:n.representTagName??(()=>e)}}function Xe(e,n){let t=n.finalize===void 0;return{tagName:e,nodeKind:`mapping`,implicit:!1,matchByTagPrefix:n.matchByTagPrefix??!1,create:n.create,addPair:n.addPair,has:n.has,keys:n.keys,get:n.get,finalize:n.finalize??(i=>i),carrierIsResult:t,identify:n.identify,represent:n.represent??(i=>i),representTagName:n.representTagName??(()=>e)}}var fo=x(`tag:yaml.org,2002:str`,{resolve:e=>e,identify:e=>typeof e==`string`});var mo=[``,`~`,`null`,`Null`,`NULL`];var ho=x(`tag:yaml.org,2002:null`,{implicit:!0,implicitFirstChars:[``,`~`,`n`,`N`],resolve:e=>mo.indexOf(e)!==-1?null:b,identify:e=>e===null,represent:()=>`null`});var go=x(`tag:yaml.org,2002:null`,{implicit:!0,implicitFirstChars:[`n`],resolve:(e,n)=>e===`null`||n&&e===``?null:b,identify:e=>e===null,represent:()=>`null`});var _o=[``,`~`,`null`,`Null`,`NULL`];var yo=x(`tag:yaml.org,2002:null`,{implicit:!0,implicitFirstChars:[``,`~`,`n`,`N`],resolve:e=>_o.indexOf(e)!==-1?null:b,identify:e=>e===null,represent:()=>`null`});var vo=[`true`,`True`,`TRUE`];var bo=[`false`,`False`,`FALSE`];var So=x(`tag:yaml.org,2002:bool`,{implicit:!0,implicitFirstChars:[`t`,`T`,`f`,`F`],resolve:e=>vo.indexOf(e)!==-1?!0:bo.indexOf(e)!==-1?!1:b,identify:e=>Object.prototype.toString.call(e)===`[object Boolean]`,represent:e=>e?`true`:`false`});var Eo=[`true`];var Io=[`false`];var wo=x(`tag:yaml.org,2002:bool`,{implicit:!0,implicitFirstChars:[`t`,`f`],resolve:e=>Eo.indexOf(e)!==-1?!0:Io.indexOf(e)!==-1?!1:b,identify:e=>Object.prototype.toString.call(e)===`[object Boolean]`,represent:e=>e?`true`:`false`});var Co=[`true`,`True`,`TRUE`,`y`,`Y`,`yes`,`Yes`,`YES`,`on`,`On`,`ON`];var Ao=[`false`,`False`,`FALSE`,`n`,`N`,`no`,`No`,`NO`,`off`,`Off`,`OFF`];var To=x(`tag:yaml.org,2002:bool`,{implicit:!0,implicitFirstChars:[`y`,`Y`,`n`,`N`,`t`,`T`,`f`,`F`,`o`,`O`],resolve:e=>Co.indexOf(e)!==-1?!0:Ao.indexOf(e)!==-1?!1:b,identify:e=>Object.prototype.toString.call(e)===`[object Boolean]`,represent:e=>e?`true`:`false`});var ko=/* @__PURE__ */ new RegExp(`^(?:0o[0-7]+|0x[0-9a-fA-F]+|[-+]?[0-9]+)$`);var xo=/* @__PURE__ */ new RegExp(`^(?:[-+]?0b[0-1]+|[-+]?0o[0-7]+|[-+]?0x[0-9a-fA-F]+|[-+]?[0-9]+)$`);function Oo(e){let n=e,t=1;return(n[0]===`-`||n[0]===`+`)&&(n[0]===`-`&&(t=-1),n=n.slice(1)),n.startsWith(`0b`)?t*parseInt(n.slice(2),2):n.startsWith(`0o`)?t*parseInt(n.slice(2),8):n.startsWith(`0x`)?t*parseInt(n.slice(2),16):t*parseInt(n,10)}function No(e,n){if(n){if(!xo.test(e))return b}else if(!ko.test(e))return b;let t=Oo(e);return Number.isFinite(t)?t:b}var Ri=x(`tag:yaml.org,2002:int`,{implicit:!0,implicitFirstChars:[`-`,`+`,...`0123456789`],resolve:No,identify:e=>Number.isInteger(e)&&!Object.is(e,-0)&&e.toString(10).indexOf(`e`)<0,represent:e=>e.toString(10)});var Lo=/* @__PURE__ */ new RegExp(`^-?(?:0|[1-9][0-9]*)$`);var Mo=/* @__PURE__ */ new RegExp(`^(?:[-+]?0b[0-1]+|[-+]?0o[0-7]+|[-+]?0x[0-9a-fA-F]+|[-+]?[0-9]+)$`);function Ro(e){let n=e,t=1;return(n[0]===`-`||n[0]===`+`)&&(n[0]===`-`&&(t=-1),n=n.slice(1)),n.startsWith(`0b`)?t*parseInt(n.slice(2),2):n.startsWith(`0o`)?t*parseInt(n.slice(2),8):n.startsWith(`0x`)?t*parseInt(n.slice(2),16):t*parseInt(n,10)}function Po(e,n){if(n){if(!Mo.test(e))return b}else if(!Lo.test(e))return b;let t=Ro(e);return Number.isFinite(t)?t:b}var Do=x(`tag:yaml.org,2002:int`,{implicit:!0,implicitFirstChars:[`-`,...`0123456789`],resolve:Po,identify:e=>Number.isInteger(e)&&!Object.is(e,-0)&&e.toString(10).indexOf(`e`)<0,represent:e=>e.toString(10)});var Fo=/* @__PURE__ */ new RegExp(`^(?:[-+]?0b[0-1_]+|[-+]?0[0-7_]+|[-+]?0x[0-9a-fA-F_]+|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+|[-+]?(?:0|[1-9][0-9_]*))$`);function Bo(e){let n=e.replace(/_/g,``),t=1;if((n[0]===`-`||n[0]===`+`)&&(n[0]===`-`&&(t=-1),n=n.slice(1)),n.startsWith(`0b`))return t*parseInt(n.slice(2),2);if(n.startsWith(`0x`))return t*parseInt(n.slice(2),16);if(n.includes(`:`)){let i=0;for(let r of n.split(`:`))i=i*60+Number(r);return t*i}return n!==`0`&&n[0]===`0`?t*parseInt(n,8):t*parseInt(n,10)}function Uo(e){if(!Fo.test(e))return b;let n=Bo(e);return Number.isFinite(n)?n:b}var Tt=x(`tag:yaml.org,2002:int`,{implicit:!0,implicitFirstChars:[`-`,`+`,...`0123456789`],resolve:Uo,identify:e=>Number.isInteger(e)&&!Object.is(e,-0)&&e.toString(10).indexOf(`e`)<0,represent:e=>e.toString(10)});var $o=/* @__PURE__ */ new RegExp(`^(?:[-+]?[0-9]+(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|[-+]?\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$`);var jo=/* @__PURE__ */ new RegExp(`^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$`);function Wo(e){if(!$o.test(e))return b;let n=e.toLowerCase(),t=n[0]===`-`?-1:1;if(`+-`.includes(n[0])&&(n=n.slice(1)),n===`.inf`)return t===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY;if(n===`.nan`)return NaN;let i=t*parseFloat(n);return Number.isFinite(i)||jo.test(e)?i:b}function qo(e){if(isNaN(e))return`.nan`;if(e===Number.POSITIVE_INFINITY)return`.inf`;if(e===Number.NEGATIVE_INFINITY)return`-.inf`;if(Object.is(e,-0))return`-0.0`;let n=e.toString(10);return/^[-+]?[0-9]+e/.test(n)?n.replace(`e`,`.e`):n}var Pi=x(`tag:yaml.org,2002:float`,{implicit:!0,implicitFirstChars:[`-`,`+`,`.`,...`0123456789`],resolve:Wo,identify:e=>typeof e==`number`&&(!Number.isInteger(e)||Object.is(e,-0)||e.toString(10).indexOf(`e`)>=0),represent:qo});var Go=/* @__PURE__ */ new RegExp(`^-?(?:0|[1-9][0-9]*)(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$`);var Vo=/* @__PURE__ */ new RegExp(`^(?:[-+]?[0-9]+(?:\\.[0-9]*)?(?:[eE][-+]?[0-9]+)?|[-+]?\\.[0-9]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$`);function Ko(e,n){if(n){if(!Vo.test(e))return b;let i=e.toLowerCase(),r=i[0]===`-`?-1:1;if(`+-`.includes(i[0])&&(i=i.slice(1)),i===`.inf`)return r===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY;if(i===`.nan`)return NaN;let o=r*parseFloat(i);return Number.isFinite(o)?o:b}if(!Go.test(e))return b;let t=Number(e);return Number.isFinite(t)?t:b}function zo(e){if(isNaN(e))return`.nan`;if(e===Number.POSITIVE_INFINITY)return`.inf`;if(e===Number.NEGATIVE_INFINITY)return`-.inf`;if(Object.is(e,-0))return`-0.0`;let n=e.toString(10);return/^[-+]?[0-9]+e/.test(n)?n.replace(`e`,`.e`):n}var Yo=x(`tag:yaml.org,2002:float`,{implicit:!0,implicitFirstChars:[`-`,...`0123456789`],resolve:Ko,identify:e=>typeof e==`number`&&(!Number.isInteger(e)||Object.is(e,-0)||e.toString(10).indexOf(`e`)>=0),represent:zo});var Ho=/* @__PURE__ */ new RegExp(`^(?:[-+]?(?:(?:[0-9][0-9_]*)?\\.[0-9_]*)(?:[eE][-+][0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$`);var Qo=/* @__PURE__ */ new RegExp(`^(?:[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$`);function Xo(e){if(!Ho.test(e))return b;let n=e.toLowerCase().replace(/_/g,``),t=n[0]===`-`?-1:1;if(`+-`.includes(n[0])&&(n=n.slice(1)),n===`.inf`)return t===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY;if(n===`.nan`)return NaN;let i=0;if(n.includes(`:`)){for(let r of n.split(`:`))i=i*60+Number(r);i*=t}else i=t*parseFloat(n);return Number.isFinite(i)||Qo.test(e)?i:b}function Jo(e){if(isNaN(e))return`.nan`;if(e===Number.POSITIVE_INFINITY)return`.inf`;if(e===Number.NEGATIVE_INFINITY)return`-.inf`;if(Object.is(e,-0))return`-0.0`;let n=e.toString(10);return/^[-+]?[0-9]+e/.test(n)?n.replace(`e`,`.e`):n}var kt=x(`tag:yaml.org,2002:float`,{implicit:!0,implicitFirstChars:[`-`,`+`,`.`,...`0123456789`],resolve:Xo,identify:e=>typeof e==`number`&&(!Number.isInteger(e)||Object.is(e,-0)||e.toString(10).indexOf(`e`)>=0),represent:Jo});var Zo=x(`tag:yaml.org,2002:merge`,{implicit:!0,implicitFirstChars:[`<`],resolve:(e,n)=>e===`<<`||n&&e===``?`<<`:b,identify:()=>!1});var ea=/^[A-Za-z0-9+/]*={0,2}$/;function ta(e){let n=e.replace(/\s/g,``);if(n.length%4!==0||!ea.test(n))return b;let t=atob(n),i=new Uint8Array(t.length);for(let r=0;r<t.length;r++)i[r]=t.charCodeAt(r);return i}function na(e){let n=``;for(let t=0;t<e.length;t++)n+=String.fromCharCode(e[t]);return btoa(n)}var ia=x(`tag:yaml.org,2002:binary`,{resolve:ta,identify:e=>Object.prototype.toString.call(e)===`[object Uint8Array]`,represent:na});var ra=/* @__PURE__ */ new RegExp(`^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$`);var oa=/* @__PURE__ */ new RegExp(`^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$`);function _i(e,n,t,i=0,r=0,o=0,a=0){let s=new Date(Date.UTC(e,n,t,i,r,o,a));return s.setUTCFullYear(e,n,t),s}function aa(e){let n=ra.exec(e);if(n===null&&(n=oa.exec(e)),n===null)return b;let t=+n[1],i=+n[2]-1,r=+n[3];if(!n[4]){let l=_i(t,i,r);return l.getUTCFullYear()!==t||l.getUTCMonth()!==i||l.getUTCDate()!==r?b:l}let o=+n[4],a=+n[5],s=+n[6],c=0;if(o>23||a>59||s>59)return b;if(n[7]){let l=n[7].slice(0,3);for(;l.length<3;)l+=`0`;c=+l}let d=_i(t,i,r,o,a,s,c);if(d.getUTCFullYear()!==t||d.getUTCMonth()!==i||d.getUTCDate()!==r)return b;if(n[9]){let l=+n[10],p=+(n[11]||0);if(l>23||p>59)return b;let u=(l*60+p)*6e4;d.setTime(d.getTime()-(n[9]===`-`?-u:u))}return d}var sa=x(`tag:yaml.org,2002:timestamp`,{implicit:!0,implicitFirstChars:[...`0123456789`],resolve:aa,identify:e=>e instanceof Date,represent:e=>e.toISOString()});var ca=Ft(`tag:yaml.org,2002:seq`,{create:()=>[],addItem:(e,n)=>{e.push(n)},identify:Array.isArray});function Je(e){if(e===null||typeof e!=`object`||Array.isArray(e))return!1;let n=Object.getPrototypeOf(e);return n===null||n===Object.prototype}function xt(e,n){let t={};for(let i of n)e[i]!==void 0&&(t[i]=e[i]);return t}var la=Ft(`tag:yaml.org,2002:omap`,{create:()=>({list:[],seen:/* @__PURE__ */ new Set}),addItem:(e,n)=>{let t;if(n instanceof Map){if(n.size!==1)return`cannot resolve an ordered map item`;t=n.keys().next().value}else if(Je(n)){let i=Object.keys(n);if(i.length!==1)return`cannot resolve an ordered map item`;t=i[0]}else return`cannot resolve an ordered map item`;return e.seen.has(t)?`duplicate key in ordered map`:(e.seen.add(t),e.list.push(n),``)},finalize:e=>e.list,identify:()=>!1});var da=Ft(`tag:yaml.org,2002:pairs`,{create:()=>[],addItem:(e,n)=>{if(n instanceof Map)return n.size!==1?`cannot resolve a pairs item`:(e.push(n.entries().next().value),``);if(Object.prototype.toString.call(n)!==`[object Object]`)return`cannot resolve a pairs item`;let t=n,i=Object.keys(t);return i.length!==1?`cannot resolve a pairs item`:(e.push([i[0],t[i[0]]]),``)},identify:()=>!1});var pa=Xe(`tag:yaml.org,2002:map`,{create:()=>({}),identify:Je,represent:e=>{let n=/* @__PURE__ */ new Map;for(let t of Object.keys(e))n.set(t,e[t]);return n},addPair:(e,n,t)=>{if(n!==null&&typeof n==`object`)return`object-based map does not support complex keys`;let i=String(n);return i===`__proto__`?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,``},has:(e,n)=>n!==null&&typeof n==`object`?!1:Object.prototype.hasOwnProperty.call(e,String(n)),keys:e=>Object.keys(e),get:(e,n)=>{let t=String(n);return Object.prototype.hasOwnProperty.call(e,t)?e[t]:null}});var ua=Xe(`tag:yaml.org,2002:set`,{create:()=>/* @__PURE__ */ new Set,identify:e=>e instanceof Set,represent:e=>{let n=/* @__PURE__ */ new Map;for(let t of e)n.set(t,null);return n},addPair:(e,n,t)=>t!==null?`cannot resolve a set item`:(e.add(n),``),has:(e,n)=>e.has(n),keys:e=>e.keys(),get:()=>null});function fa(){return{scalar:Object.create(null),sequence:Object.create(null),mapping:Object.create(null)}}function ma(){return{scalar:[],sequence:[],mapping:[]}}function ha(e){let n=[];for(let t of e){let i=n.length;for(let r=0;r<n.length;r++){let o=n[r];if(o.nodeKind===t.nodeKind&&o.tagName===t.tagName&&o.matchByTagPrefix===t.matchByTagPrefix){i=r;break}}n[i]=t}return n}var Ze=class Di{tags;implicitScalarTags;implicitScalarByFirstChar;implicitScalarAnyFirstChar;defaultScalarTag;defaultSequenceTag;defaultMappingTag;exact;prefix;constructor(n){let t=ha(n),i=[],r=fa(),o=ma();for(let l of t){if(l.nodeKind===`scalar`&&l.implicit){if(l.matchByTagPrefix)throw new Error(`Implicit scalar tags cannot match by tag prefix`);i.push(l)}switch(l.nodeKind){case`scalar`:l.matchByTagPrefix?o.scalar.push(l):r.scalar[l.tagName]=l;break;case`sequence`:l.matchByTagPrefix?o.sequence.push(l):r.sequence[l.tagName]=l;break;case`mapping`:l.matchByTagPrefix?o.mapping.push(l):r.mapping[l.tagName]=l}}let a=i.filter(l=>l.implicitFirstChars===null),s=/* @__PURE__ */ new Set;for(let l of i)if(l.implicitFirstChars!==null)for(let p of l.implicitFirstChars)s.add(p);let c=/* @__PURE__ */ new Map;for(let l of s)c.set(l,i.filter(p=>p.implicitFirstChars===null||p.implicitFirstChars.indexOf(l)!==-1));let d=r.scalar[`tag:yaml.org,2002:str`];if(!d)throw new Error(`schema does not define the default scalar tag (tag:yaml.org,2002:str)`);this.tags=t,this.implicitScalarTags=i,this.implicitScalarByFirstChar=c,this.implicitScalarAnyFirstChar=a,this.defaultScalarTag=d,this.defaultSequenceTag=r.sequence[`tag:yaml.org,2002:seq`],this.defaultMappingTag=r.mapping[`tag:yaml.org,2002:map`],this.exact=r,this.prefix=o}lookupScalarTag(n){let t=this.exact.scalar[n];if(t)return t;for(let i of this.prefix.scalar)if(n.startsWith(i.tagName))return i}lookupSequenceTag(n){let t=this.exact.sequence[n];if(t)return t;for(let i of this.prefix.sequence)if(n.startsWith(i.tagName))return i}lookupMappingTag(n){let t=this.exact.mapping[n];if(t)return t;for(let i of this.prefix.mapping)if(n.startsWith(i.tagName))return i}resolveImplicitScalarTag(n){let t=this.implicitScalarByFirstChar.get(n.charAt(0))??this.implicitScalarAnyFirstChar;for(let r of t){let o=r.resolve(n,!1,r.tagName);if(o!==b)return{value:o,tag:r}}let i=this.defaultScalarTag;return{value:i.resolve(n,!1,i.tagName),tag:i}}withTags(...n){let t=[];for(let i of n)t=t.concat(i);return new Di([...this.tags,...t])}};var Bt=new Ze([fo,ca,pa]);new Ze([...Bt.tags,go,wo,Do,Yo]);var ga=new Ze([...Bt.tags,ho,So,Ri,Pi]);var ya=new Ze([...Bt.tags,yo,To,Tt,kt,sa,Zo,ia,la,da,ua]).withTags(W$1(U({},Tt),{resolve:(e,n,t)=>{let i=Tt.resolve(e,n,t);return i===b?Ri.resolve(e,n,t):i}}),W$1(U({},kt),{resolve:(e,n,t)=>{let i=kt.resolve(e,n,t);return i===b?Pi.resolve(e,n,t):i}}));Xe(`tag:yaml.org,2002:map`,{create:()=>/* @__PURE__ */ new Map,addPair:(e,n,t)=>(e.set(n,t),``),has:(e,n)=>e.has(n),keys:e=>e.keys(),get:(e,n)=>e.get(n),identify:e=>e instanceof Map||Je(e),represent:e=>{if(e instanceof Map)return e;let n=/* @__PURE__ */ new Map,t=e;for(let i of Object.keys(t))n.set(i,t[i]);return n}});function yi(e){if(Array.isArray(e)){let n=Array.prototype.slice.call(e);for(let t=0;t<n.length;t++){if(Array.isArray(n[t]))return null;typeof n[t]==`object`&&Object.prototype.toString.call(n[t])===`[object Object]`&&(n[t]=`[object Object]`)}return String(n)}return typeof e==`object`&&Object.prototype.toString.call(e)===`[object Object]`?`[object Object]`:String(e)}Xe(`tag:yaml.org,2002:map`,{create:()=>({}),identify:Je,represent:e=>{let n=/* @__PURE__ */ new Map;for(let t of Object.keys(e))n.set(t,e[t]);return n},addPair:(e,n,t)=>{let i=yi(n);return i===null?`nested arrays are not supported inside keys`:(i===`__proto__`?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,``)},has:(e,n)=>{let t=yi(n);return t!==null&&Object.prototype.hasOwnProperty.call(e,t)},keys:e=>Object.keys(e),get:(e,n)=>{let t=String(n);return Object.prototype.hasOwnProperty.call(e,t)?e[t]:null}});var va={maxLength:79,indent:1,linesBefore:3,linesAfter:2};function bt(e,n,t,i,r){let o=``,a=``,s=Math.floor(r/2)-1;return i-n>s&&(o=` ... `,n=i-s+o.length),t-i>s&&(a=` ...`,t=i+s-a.length),{str:o+e.slice(n,t).replace(/\t/g,`→`)+a,pos:i-n+o.length}}function St(e,n){return` `.repeat(Math.max(n-e.length,0))+e}function ba(e,n){if(!e.buffer)return null;let t=U(U({},va),n),i=/\r?\n|\r|\0/g,r=[0],o=[],a,s=-1;for(;a=i.exec(e.buffer);)o.push(a.index),r.push(a.index+a[0].length),e.position<=a.index&&s<0&&(s=r.length-2);s<0&&(s=r.length-1);let c=``,d=Math.min(e.line+t.linesAfter,o.length).toString().length,l=t.maxLength-(t.indent+d+3);for(let u=1;u<=t.linesBefore&&!(s-u<0);u++){let y=bt(e.buffer,r[s-u],o[s-u],e.position-(r[s]-r[s-u]),l);c=`${` `.repeat(t.indent)}${St((e.line-u+1).toString(),d)} | ${y.str}
${c}`}let p=bt(e.buffer,r[s],o[s],e.position,l);c+=`${` `.repeat(t.indent)}${St((e.line+1).toString(),d)} | ${p.str}
`,c+=`${`-`.repeat(t.indent+d+3+p.pos)}^
`;for(let u=1;u<=t.linesAfter&&!(s+u>=o.length);u++){let y=bt(e.buffer,r[s+u],o[s+u],e.position-(r[s]-r[s+u]),l);c+=`${` `.repeat(t.indent)}${St((e.line+u+1).toString(),d)} | ${y.str}
`}return c.replace(/\n$/,``)}function vi(e,n){let t=``;return e.mark?(e.mark.name&&(t+=`in "${e.mark.name}" `),t+=`(${e.mark.line+1}:${e.mark.column+1})`,!n&&e.mark.snippet&&(t+=`

${e.mark.snippet}`),`${e.reason} ${t}`):e.reason}var H=class Fi extends Error{reason;mark;constructor(n,t){super(),this.name=`YAMLException`,this.reason=n,this.mark=t,this.message=vi(this,!1),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}toString(n){return`${this.name}: ${vi(this,n)}`}static throwAt(n,t,i,r=``){let o=0,a=0;for(let c=0;c<t;c++){let d=n.charCodeAt(c);d===10?(o++,a=c+1):d===13&&(o++,n.charCodeAt(c+1)===10&&c++,a=c+1)}let s={name:r,buffer:n,position:t,line:o,column:t-a};throw s.snippet=ba(s),new Fi(i,s)}};var w={DOCUMENT:1,SEQUENCE:2,MAPPING:3,SCALAR:4,ALIAS:5,POP:6};var h={PLAIN:1,SINGLE_QUOTED:2,DOUBLE_QUOTED:3,LITERAL_BLOCK:4,FOLDED_BLOCK:5};var N={BLOCK:1,FLOW:2};var M={CLIP:1,STRIP:2,KEEP:3};var Sa=-1;function bi(e){switch(e){case 48:return`\0`;case 97:return`\x07`;case 98:return`\b`;case 116:return`	`;case 9:return`	`;case 110:return`
`;case 118:return`\v`;case 102:return`\f`;case 114:return`\r`;case 101:return`\x1B`;case 32:return` `;case 34:return`"`;case 47:return`/`;case 92:return`\\`;case 78:return``;case 95:return`\xA0`;case 76:return`\u2028`;case 80:return`\u2029`;default:return``}}var Bi=new Array(256);var Ui=new Array(256);for(let e=0;e<256;e++)Bi[e]=bi(e)?1:0,Ui[e]=bi(e);function Ea(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}function Ia(e){return e>=48&&e<=57?e-48:(e|32)-97+10}function wa(e){return e===120?2:e===117?4:8}function ze(e,n,t){let i=0;for(;n<t;){let r=e.charCodeAt(n);if(r===10)i++,n++;else if(r===13)i++,n++,e.charCodeAt(n)===10&&n++;else if(r===32||r===9)n++;else break}return{position:n,breaks:i}}function Ut(e){return e===1?` `:`
`.repeat(e-1)}function Ca(e,n,t){let i=``,r=n,o=n,a=n;for(;r<t;){let s=e.charCodeAt(r);if(s===10||s===13){i+=e.slice(o,a);let c=ze(e,r,t);i+=Ut(c.breaks),r=o=a=c.position}else r++,s!==32&&s!==9&&(a=r)}return i+e.slice(o,a)}function Aa(e,n,t){let i=``,r=n,o=n,a=n;for(;r<t;){let s=e.charCodeAt(r);if(s===39)i+=e.slice(o,r)+`'`,r+=2,o=a=r;else if(s===10||s===13){i+=e.slice(o,a);let c=ze(e,r,t);i+=Ut(c.breaks),r=o=a=c.position}else r++,s!==32&&s!==9&&(a=r)}return i+e.slice(o,t)}function Ta(e,n,t){let i=``,r=n,o=n,a=n;for(;r<t;){let s=e.charCodeAt(r);if(s===92){i+=e.slice(o,r),r++;let c=e.charCodeAt(r);if(c===10||c===13)r=ze(e,r,t).position;else if(c<256&&Bi[c])i+=Ui[c],r++;else{let d=wa(c),l=0;for(;d>0;d--){r++;let p=Ia(e.charCodeAt(r));l=(l<<4)+p}i+=Ea(l),r++}o=a=r}else if(s===10||s===13){i+=e.slice(o,a);let c=ze(e,r,t);i+=Ut(c.breaks),r=o=a=c.position}else r++,s!==32&&s!==9&&(a=r)}return i+e.slice(o,t)}function Si(e,n,t,i,r,o){let a=i<0?0:i,s=e.slice(n,t).replace(/\r\n?/g,`
`),c=s===``?[]:(s.endsWith(`
`)?s.slice(0,-1):s).split(`
`),d=``,l=!1,p=0,u=!1;for(let y of c){let g=0;for(;g<a&&y.charCodeAt(g)===32;)g++;if(i<0||g>=y.length){p++;continue}let v=y.slice(a),I=v.charCodeAt(0);o?I===32||I===9?(u=!0,d+=`
`.repeat(l?1+p:p)):u?(u=!1,d+=`
`.repeat(p+1)):p===0?l&&(d+=` `):d+=`
`.repeat(p):d+=`
`.repeat(l?1+p:p),d+=v,l=!0,p=0}return r===M.KEEP?d+=`
`.repeat(l?1+p:p):r!==M.STRIP&&l&&(d+=`
`),d}function ka(e,n){if(n.valueStart===Sa)return``;let{valueStart:t,valueEnd:i}=n;if(n.fast)return e.slice(t,i);switch(n.style){case h.SINGLE_QUOTED:return Aa(e,t,i);case h.DOUBLE_QUOTED:return Ta(e,t,i);case h.LITERAL_BLOCK:return Si(e,t,i,n.indent,n.chomping,!1);case h.FOLDED_BLOCK:return Si(e,t,i,n.indent,n.chomping,!0);default:return Ca(e,t,i)}}var xa=Object.assign(Object.create(null),{"!":`!`,"!!":`tag:yaml.org,2002:`});var $i=`-#;/?:@&=+$_.~*'()`;var Oa=$i+`!,[]`;var Ei=`0123456789ABCDEF`;function W(e){return`%`+Ei[e>>4]+Ei[e&15]}function Et(e,n){let t=n?$i:Oa,i=``;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);if(o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122||t.includes(e[r])){i+=e[r];continue}o>=55296&&o<=56319&&(o=65536+((o&1023)<<10)+(e.charCodeAt(++r)&1023)),o<128?i+=W(o):o<2048?i+=W(192|o>>6)+W(128|o&63):o<65536?i+=W(224|o>>12)+W(128|o>>6&63)+W(128|o&63):i+=W(240|o>>18)+W(128|o>>12&63)+W(128|o>>6&63)+W(128|o&63)}return i}function It(e){let n=``,t=0;for(;t<e.length;){if(e.charCodeAt(t)!==37){n+=e[t++];continue}let i=parseInt(e.slice(t+1,t+3),16);if(t+=3,i>=192){let r=i<224?1:i<240?2:3;for(i&=(1<<6-r)-1;r-->0;)i=i<<6|parseInt(e.slice(t+1,t+3),16)&63,t+=3}i<65536?n+=String.fromCharCode(i):(i-=65536,n+=String.fromCharCode(55296|i>>10,56320|i&1023))}return n}function ji(e,n){if(e.startsWith(`!<`)&&e.endsWith(`>`))return It(e.slice(2,-1));let t=e.indexOf(`!`,1),i=t===-1?`!`:e.slice(0,t+1);return It(n?.[i]??xa[i]??i)+It(e.slice(i.length))}function Wi(e){let n=e;return n.charCodeAt(0)===33?(n=n.slice(1),`!${Et(n,!0)}`):n.slice(0,18)===`tag:yaml.org,2002:`?`!!${Et(n.slice(18),!0)}`:`!<${Et(n,!1)}>`}var pe=-1;var Na=`tag:yaml.org,2002:merge`;var $t={filename:``,schema:ga,json:!1,maxTotalMergeKeys:1e4,maxAliases:-1};function La(e){return`tagStart`in e&&e.tagStart!==pe?e.tagStart:`anchorStart`in e&&e.anchorStart!==pe?e.anchorStart:`valueStart`in e&&e.valueStart!==pe?e.valueStart:`start`in e?e.start:0}function T(e,n){H.throwAt(e.source,e.position,n,e.filename)}function qi(e,n,t,i){try{return t.finalize(i)}catch(r){if(r instanceof H)throw r;H.throwAt(e.source,n,r instanceof Error?r.message:String(r),e.filename)}}function Ma(e,n){let t=ka(e.source,n),i=n.tagStart===pe?``:e.source.slice(n.tagStart,n.tagEnd),r=e.schema.defaultScalarTag;if(i!==``){if(i===`!`)return{value:t,tag:r};let o=ji(i,e.tagHandlers),a=e.schema.lookupScalarTag(o);if(a){let c=a.resolve(t,!0,o);return c===b&&T(e,`cannot resolve a node with !<${o}> explicit tag`),{value:c,tag:a}}let s=e.schema.lookupMappingTag(o)??e.schema.lookupSequenceTag(o);if(s){t!==``&&T(e,`cannot resolve a node with !<${o}> explicit tag`);let c=s.create(o);return{value:s.carrierIsResult?c:qi(e,e.position,s,c),tag:s}}T(e,`unknown scalar tag !<${o}>`)}return n.style===h.PLAIN?e.schema.resolveImplicitScalarTag(t):{value:r.resolve(t,!1,r.tagName),tag:r}}function Ii(e,n,t){let i=n.tagStart===pe?``:e.source.slice(n.tagStart,n.tagEnd);return i===``||i===`!`?t:ji(i,e.tagHandlers)}function Gi(e){return e.nodeKind===`mapping`}function wi(e){e.totalMergeKeys++,e.maxTotalMergeKeys!==-1&&e.totalMergeKeys>e.maxTotalMergeKeys&&T(e,`merge keys exceeded maxTotalMergeKeys (${e.maxTotalMergeKeys})`)}function Ci(e,n,t,i){wi(e);for(let r of i.keys(t)){if(wi(e),n.tag.has(n.value,r))continue;let o=n.tag.addPair(n.value,r,i.get(t,r));o&&T(e,o),n.overridable??=/* @__PURE__ */ new Set,n.overridable.add(r)}}function Ra(e,n,t,i){if(e.position=n.keyPosition,Gi(i))Ci(e,n,t,i);else if(i.nodeKind===`sequence`&&Array.isArray(t)){t.length>100&&T(e,`abnormal merge sequence size`);for(let r of t){let o=e.nodeTags.get(r);o||T(e,`cannot merge mappings; the provided source object is unacceptable`),Ci(e,n,r,o)}}else T(e,`cannot merge mappings; the provided source object is unacceptable`)}function Pa(e,n,t,i,r){if(e.position=n.keyPosition,n.keyIsMerge){Ra(e,n,i,r);return}!e.json&&n.tag.has(n.value,t)&&!n.overridable?.has(t)&&T(e,`duplicated mapping key`);let o=n.tag.addPair(n.value,t,i);o&&T(e,o),n.overridable?.delete(t)}function wt(e,n,t){let i=e.frames[e.frames.length-1];if(i.kind===`document`)i.value=n,i.hasValue=!0;else if(i.kind===`sequence`){Gi(t)&&e.nodeTags.set(n,t);let r=i.tag.addItem(i.value,n,i.index++);r&&T(e,r)}else if(i.hasKey){let r=i.key;i.key=void 0,i.hasKey=!1,Pa(e,i,r,n,t)}else i.key=n,i.keyPosition=e.position,i.hasKey=!0,i.keyIsMerge=t.tagName===Na}function Ct(e,n,t,i,r){if(n.anchorStart!==pe){let o={value:t,tag:i,isValueFinal:r};return e.anchors.set(e.source.slice(n.anchorStart,n.anchorEnd),o),o}return null}function Da(e,n){let t=W$1(U(U({},$t),n),{events:e,documents:[],eventIndex:0,position:0,frames:[],anchors:/* @__PURE__ */ new Map,nodeTags:/* @__PURE__ */ new Map,tagHandlers:Object.create(null),totalMergeKeys:0,aliasCount:0});for(;t.eventIndex<t.events.length;){let i=t.events[t.eventIndex++];switch(t.position=La(i),i.type){case w.DOCUMENT:t.anchors=/* @__PURE__ */ new Map,t.nodeTags=/* @__PURE__ */ new Map,t.aliasCount=0,t.tagHandlers=Object.create(null);for(let r of i.directives)r.kind===`tag`&&(t.tagHandlers[r.handle]=r.prefix);t.frames.push({kind:`document`,position:t.position,value:void 0,hasValue:!1});break;case w.SCALAR:{let{value:r,tag:o}=Ma(t,i);Ct(t,i,r,o,!0),wt(t,r,o);break}case w.SEQUENCE:{let r=Ii(t,i,`tag:yaml.org,2002:seq`),o=t.schema.lookupSequenceTag(r);o||T(t,`unknown sequence tag !<${r}>`);let a=o.create(r),s=Ct(t,i,a,o,o.carrierIsResult);t.frames.push({kind:`sequence`,position:t.position,value:a,tag:o,anchor:s,index:0});break}case w.MAPPING:{let r=Ii(t,i,`tag:yaml.org,2002:map`),o=t.schema.lookupMappingTag(r);o||T(t,`unknown mapping tag !<${r}>`);let a=o.create(r),s=Ct(t,i,a,o,o.carrierIsResult);t.frames.push({kind:`mapping`,position:t.position,value:a,tag:o,anchor:s,key:void 0,keyPosition:t.position,hasKey:!1,keyIsMerge:!1,overridable:null});break}case w.ALIAS:{t.maxAliases!==-1&&++t.aliasCount>t.maxAliases&&T(t,`aliases exceeded maxAliases (${t.maxAliases})`);let r=t.source.slice(i.anchorStart,i.anchorEnd),o=t.anchors.get(r);o||T(t,`unidentified alias "${r}"`),o.isValueFinal||T(t,`recursive alias "${r}" is not supported for tag ${o.tag.tagName} because it uses finalize()`),wt(t,o.value,o.tag);break}case w.POP:{let r=t.frames.pop();if(r.kind===`mapping`&&r.hasKey&&(t.position=r.keyPosition,T(t,`incomplete mapping pair in event stream`)),r.kind===`document`)t.documents.push(r.value);else{let o=r.tag.carrierIsResult?r.value:qi(t,r.position,r.tag,r.value);r.anchor&&(r.anchor.value=o,r.anchor.isValueFinal=!0),wt(t,o,r.tag)}break}}}return t.documents}var S=-1;var Vi=Object.prototype.hasOwnProperty;var he=1;var Ki=2;var zi=3;var Ye=4;var Fa=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;var Ba=/[,\[\]{}]/;var Yi=/^(?:!|!!|![0-9A-Za-z-]+!)$/;var Ot=String.raw`(?:%[0-9A-Fa-f]{2}|[0-9A-Za-z\-#;/?:@&=+$,_.!~*'()\[\]])`;var Hi=String.raw`(?:%[0-9A-Fa-f]{2}|[0-9A-Za-z\-#;/?:@&=+$.~*'()_])`;var Ua=new RegExp(`^(?:${Ot})*$`);var $a=new RegExp(`^(?:${Hi})+$`);var ja=new RegExp(`^(?:!(?:${Ot})*|${Hi}(?:${Ot})*)$`);var jt={filename:``,maxDepth:100};function Wa(e,n,t){e.events.push({type:w.DOCUMENT,explicitStart:n,explicitEnd:t,directives:e.directives})}function Qi(e,n,t,i,r,o,a){e.events.push({type:w.SEQUENCE,start:n,anchorStart:t,anchorEnd:i,tagStart:r,tagEnd:o,style:a})}function Xi(e,n,t,i,r,o,a){e.events.push({type:w.MAPPING,start:n,anchorStart:t,anchorEnd:i,tagStart:r,tagEnd:o,style:a})}function Ai(e,n){e.events.splice(n.eventsLength,0,{type:w.MAPPING,start:n.position,anchorStart:S,anchorEnd:S,tagStart:S,tagEnd:S,style:N.FLOW})}function ye(e,n,t,i,r,o,a,s,c=M.CLIP,d=-1,l=!1){e.events.push({type:w.SCALAR,valueStart:n,valueEnd:t,anchorStart:i,anchorEnd:r,tagStart:o,tagEnd:a,style:s,chomping:c,indent:d,fast:l})}function qa(e,n,t){e.events.push({type:w.ALIAS,anchorStart:n,anchorEnd:t})}function ue(e){e.events.push({type:w.POP})}function O(e){ye(e,S,S,S,S,S,S,h.PLAIN)}function Ti(){return{anchorStart:S,anchorEnd:S,tagStart:S,tagEnd:S}}function fe(e){return{position:e.position,line:e.line,lineStart:e.lineStart,lineIndent:e.lineIndent,firstTabInLine:e.firstTabInLine,eventsLength:e.events.length}}function me(e,n){e.position=n.position,e.line=n.line,e.lineStart=n.lineStart,e.lineIndent=n.lineIndent,e.firstTabInLine=n.firstTabInLine,e.events.length=n.eventsLength}function m(e,n){H.throwAt(e.input.slice(0,e.length),e.position,n,e.filename)}function A(e){return e===10||e===13}function ve(e){return e===9||e===32}function B(e){return ve(e)||A(e)}function q(e){return e===0||B(e)}function Z(e){return e===44||e===91||e===93||e===123||e===125}function Ga(e){return e>=48&&e<=57?e-48:-1}function Va(e){if(e>=48&&e<=57)return e-48;let n=e|32;return n>=97&&n<=102?n-97+10:-1}function Ka(e){return e===120?2:e===117?4:e===85?8:0}function za(e){return e===48||e===97||e===98||e===116||e===9||e===110||e===118||e===102||e===114||e===101||e===32||e===34||e===47||e===92||e===78||e===95||e===76||e===80}function He(e){e.input.charCodeAt(e.position)===10?e.position++:(e.position++,e.input.charCodeAt(e.position)===10&&e.position++),e.line++,e.lineStart=e.position,e.lineIndent=0,e.firstTabInLine=-1}function k(e,n){let t=0,i=e.input.charCodeAt(e.position),r=e.position===e.lineStart||B(e.input.charCodeAt(e.position-1));for(;i!==0;){for(;ve(i);)r=!0,i===9&&e.firstTabInLine===-1&&(e.firstTabInLine=e.position),i=e.input.charCodeAt(++e.position);if(n&&r&&i===35)do i=e.input.charCodeAt(++e.position);while(!A(i)&&i!==0);if(!A(i))break;for(He(e),t++,r=!0,i=e.input.charCodeAt(e.position);i===32;)e.lineIndent++,i=e.input.charCodeAt(++e.position)}return t}function ge(e,n=e.position){let t=e.input.charCodeAt(n);if((t===45||t===46)&&t===e.input.charCodeAt(n+1)&&t===e.input.charCodeAt(n+2)){let i=e.input.charCodeAt(n+3);return i===0||B(i)}return!1}function Ji(e){e.position===e.lineStart&&e.input.charCodeAt(e.position)===65279&&(e.position++,e.lineStart=e.position)}function Wt(e){if(e.position!==e.lineStart)return!1;if(ge(e))return!0;if(e.input.charCodeAt(e.position)!==65279)return!1;let n=fe(e);Ji(e),k(e,!0);let t=e.input.charCodeAt(e.position),i=e.position===e.lineStart&&(t===37||t===45&&ge(e));return me(e,n),i}function ki(e){let n=e.input.charCodeAt(e.position);for(;n!==0&&!A(n);)n=e.input.charCodeAt(++e.position)}function Zi(e,n,t){let i=Fa.exec(e.input.slice(n,t));i!==null&&(e.position=n+i.index+i[0].length-1,m(e,`the stream contains non-printable characters`))}function Ya(e,n,t){if(e.input.charCodeAt(e.position)!==33)return!1;n.tagStart!==S&&m(e,`duplication of a tag property`);let i=e.position,r=!1,o=!1,a=`!`,s=e.input.charCodeAt(++e.position);s===60?(r=!0,s=e.input.charCodeAt(++e.position)):s===33&&(o=!0,a=`!!`,s=e.input.charCodeAt(++e.position));let c=e.position,d;if(r){for(;s!==0&&s!==62;)s=e.input.charCodeAt(++e.position);s!==62&&m(e,`unexpected end of the stream within a verbatim tag`),d=e.input.slice(c,e.position),e.position++}else{for(;s!==0&&!B(s)&&!(t&&Z(s));)s===33&&(o?m(e,`tag suffix cannot contain exclamation marks`):(a=e.input.slice(c-1,e.position+1),Yi.test(a)||m(e,`named tag handle cannot contain such characters`),o=!0,c=e.position+1)),s=e.input.charCodeAt(++e.position);d=e.input.slice(c,e.position),Ba.test(d)&&m(e,`tag suffix cannot contain flow indicator characters`)}return d&&!(r?Ua.test(d):$a.test(d))&&m(e,`tag name cannot contain such characters: ${d}`),!r&&a!==`!`&&a!==`!!`&&!Vi.call(e.tagHandlers,a)&&m(e,`undeclared tag handle "${a}"`),n.tagStart=i,n.tagEnd=e.position,!0}function Ha(e,n){if(e.input.charCodeAt(e.position)!==38)return!1;n.anchorStart!==S&&m(e,`duplication of an anchor property`),e.position++;let t=e.position;for(;e.input.charCodeAt(e.position)!==0&&!B(e.input.charCodeAt(e.position))&&!Z(e.input.charCodeAt(e.position));)e.position++;return e.position===t&&m(e,`name of an anchor node must contain at least one character`),n.anchorStart=t,n.anchorEnd=e.position,!0}function Qa(e,n){if(e.input.charCodeAt(e.position)!==42)return!1;(n.anchorStart!==S||n.tagStart!==S)&&m(e,`alias node should not have any properties`),e.position++;let t=e.position;for(;e.input.charCodeAt(e.position)!==0&&!B(e.input.charCodeAt(e.position))&&!Z(e.input.charCodeAt(e.position));)e.position++;return e.position===t&&m(e,`name of an alias node must contain at least one character`),qa(e,t,e.position),!0}function Nt(e,n){k(e,!1),e.lineIndent<n&&m(e,`deficient indentation`)}function Xa(e,n,t){if(e.input.charCodeAt(e.position)!==39)return!1;e.position++;let i=e.position,r=!0;for(;e.input.charCodeAt(e.position)!==0;){let o=e.input.charCodeAt(e.position);if(o===39){if(e.input.charCodeAt(e.position+1)===39){r=!1,e.position+=2;continue}let a=e.position;return e.position++,ye(e,i,a,t.anchorStart,t.anchorEnd,t.tagStart,t.tagEnd,h.SINGLE_QUOTED,M.CLIP,-1,r),!0}A(o)?(r=!1,Nt(e,n)):e.position===e.lineStart&&ge(e)?m(e,`unexpected end of the document within a single quoted scalar`):o!==9&&o<32?m(e,`expected valid JSON character`):e.position++}m(e,`unexpected end of the stream within a single quoted scalar`)}function Ja(e,n,t){if(e.input.charCodeAt(e.position)!==34)return!1;e.position++;let i=e.position,r=!0;for(;e.input.charCodeAt(e.position)!==0;){let o=e.input.charCodeAt(e.position);if(o===34){let a=e.position;return e.position++,ye(e,i,a,t.anchorStart,t.anchorEnd,t.tagStart,t.tagEnd,h.DOUBLE_QUOTED,M.CLIP,-1,r),!0}if(o===92){r=!1;let a=e.input.charCodeAt(++e.position);if(A(a))Nt(e,n);else if(za(a))e.position++;else{let s=Ka(a);for(s===0&&m(e,`unknown escape sequence`);s-->0;)e.position++,Va(e.input.charCodeAt(e.position))<0&&m(e,`expected hexadecimal character`);e.position++}}else A(o)?(r=!1,Nt(e,n)):e.position===e.lineStart&&ge(e)?m(e,`unexpected end of the document within a double quoted scalar`):o!==9&&o<32?m(e,`expected valid JSON character`):e.position++}m(e,`unexpected end of the stream within a double quoted scalar`)}function Za(e,n,t){let i=e.input.charCodeAt(e.position),r=M.CLIP,o=-1,a=!1;if(i!==124&&i!==62)return!1;let s=i===124?h.LITERAL_BLOCK:h.FOLDED_BLOCK;for(e.position++;e.input.charCodeAt(e.position)!==0;){let y=e.input.charCodeAt(e.position),g=Ga(y);if(y===43||y===45)r!==M.CLIP&&m(e,`repeat of a chomping mode identifier`),r=y===43?M.KEEP:M.STRIP,e.position++;else if(g>=0)g===0&&m(e,`bad explicit indentation width of a block scalar; it cannot be less than one`),a&&m(e,`repeat of an indentation width identifier`),o=n+g-1,a=!0,e.position++;else break}let c=!1;for(;ve(e.input.charCodeAt(e.position));)c=!0,e.position++;c&&e.input.charCodeAt(e.position)===35&&ki(e),A(e.input.charCodeAt(e.position))?He(e):e.input.charCodeAt(e.position)!==0&&m(e,`a line break is expected`);let d=a?o:-1,l=0,p=e.position,u=e.position;for(;e.input.charCodeAt(e.position)!==0;){let y=e.position,g=0;for(;e.input.charCodeAt(y+g)===32;)g++;let v=e.input.charCodeAt(y+g);if(v===0){d>=0?g>d&&(u=y+g):g>0&&(u=y+g);break}if(Wt(e))break;if(!a&&d===-1&&A(v)&&(l=Math.max(l,g)),!a&&d===-1&&!A(v)&&(v===9&&g<n&&(e.position=y+g,m(e,`tab characters must not be used in indentation`)),g>=n&&g<l&&(e.position=y+g,m(e,`bad indentation of a mapping entry`))),d===-1&&v!==0&&!A(v)&&g<n){e.lineIndent=g,e.position=y+g;break}!a&&v!==0&&!A(v)&&d===-1&&(d=g);let I=d===-1?n+1:d;if(v!==0&&!A(v)&&g<I){e.lineIndent=g,e.position=y+g;break}ki(e),u=e.position,A(e.input.charCodeAt(e.position))&&(He(e),u=e.position)}return Zi(e,p,u),ye(e,p,u,t.anchorStart,t.anchorEnd,t.tagStart,t.tagEnd,s,r,d),!0}function es(e,n){let t=e.input.charCodeAt(e.position),i=n===he;if(t===0||B(t)||t===35||t===38||t===42||t===33||t===124||t===62||t===39||t===34||t===37||t===64||t===96||Z(t))return!1;if(t===63||t===45){let r=e.input.charCodeAt(e.position+1);if(q(r)||i&&Z(r))return!1}return!0}function ts(e,n,t,i){if(!es(e,t))return!1;let r=e.position,o=e.position,a=e.input.charCodeAt(e.position),s=t===he,c=!1;for(;a!==0&&!Wt(e);){if(a===58){let d=e.input.charCodeAt(e.position+1);if(q(d)||s&&Z(d))break}else if(a===35){if(B(e.input.charCodeAt(e.position-1)))break}else{if(s&&Z(a))break;if(A(a)){let d=e.position,l=e.line,p=e.lineStart,u=e.lineIndent;if(k(e,!1),e.lineIndent>=n){c=!0,a=e.input.charCodeAt(e.position);continue}e.position=d,e.line=l,e.lineStart=p,e.lineIndent=u;break}}ve(a)||(o=e.position+1),a=e.input.charCodeAt(++e.position)}return o===r?!1:(Zi(e,r,o),ye(e,r,o,i.anchorStart,i.anchorEnd,i.tagStart,i.tagEnd,h.PLAIN,M.CLIP,-1,!c),!0)}function Oe(e,n){let t=e.line;k(e,!0),(e.line>t&&e.lineIndent<n||e.firstTabInLine!==-1&&e.lineIndent<n)&&m(e,`deficient indentation`)}function ns(e,n,t){let i=e.input.charCodeAt(e.position),r=i===123,o=e.position,a=!0;if(i!==91&&i!==123)return!1;let s=r?125:93;for(r?Xi(e,o,t.anchorStart,t.anchorEnd,t.tagStart,t.tagEnd,N.FLOW):Qi(e,o,t.anchorStart,t.anchorEnd,t.tagStart,t.tagEnd,N.FLOW),e.position++;e.input.charCodeAt(e.position)!==0;){Oe(e,n);let c=e.input.charCodeAt(e.position);if(c===s)return e.position++,ue(e),!0;a?c===44&&m(e,`expected the node content, but found ','`):m(e,`missed comma between flow collection entries`);let d=!1,l=!1;c===63&&B(e.input.charCodeAt(e.position+1))&&(d=l=!0,e.position+=1,Oe(e,n));let p=e.line,u=fe(e),y=_e(e,n,he,!1,!0);Oe(e,n),c=e.input.charCodeAt(e.position),(r||l||e.line===p)&&c===58?(d=!0,e.position++,Oe(e,n),r||Ai(e,u),y||O(e),_e(e,n,he,!1,!0)||O(e),Oe(e,n),r||ue(e)):r&&d?(y||O(e),O(e)):r?O(e):d&&(Ai(e,u),y||O(e),O(e),ue(e)),c=e.input.charCodeAt(e.position),c===44?(a=!0,e.position++):a=!1}m(e,`unexpected end of the stream within a flow collection`)}function xi(e,n,t){if(e.firstTabInLine!==-1||e.input.charCodeAt(e.position)!==45||!q(e.input.charCodeAt(e.position+1)))return!1;for(Qi(e,e.position,t.anchorStart,t.anchorEnd,t.tagStart,t.tagEnd,N.BLOCK);e.input.charCodeAt(e.position)===45&&q(e.input.charCodeAt(e.position+1));){e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,m(e,`tab characters must not be used in indentation`));let i=e.line;e.position++;let r=k(e,!0)>0;if(e.firstTabInLine!==-1&&e.input.charCodeAt(e.position)===45&&q(e.input.charCodeAt(e.position+1))&&m(e,`bad indentation of a sequence entry`),r&&e.lineIndent<=n?O(e):_e(e,n,zi,!1,!0),k(e,!0),e.lineIndent<n||e.position>=e.length)break;e.lineIndent>n&&m(e,`bad indentation of a sequence entry`),e.line===i&&e.input.charCodeAt(e.position)===45&&q(e.input.charCodeAt(e.position+1))&&m(e,`bad indentation of a sequence entry`)}return ue(e),!0}function At(e,n,t,i){let r=!1,o=!1,a=!1,s=!1;if(e.firstTabInLine!==-1)return!1;let c=e.input.charCodeAt(e.position);for(;c!==0;){!r&&e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,m(e,`tab characters must not be used in indentation`));let d=e.input.charCodeAt(e.position+1),l=e.line;if((c===63||c===58)&&q(d))a||(Xi(e,e.position,i.anchorStart,i.anchorEnd,i.tagStart,i.tagEnd,N.BLOCK),a=!0),c===63?(r&&O(e),o=!0,r=!0):(r||(O(e),o=!0),r=!1),e.position+=1,s=!0;else{r&&(O(e),r=!1);let p=fe(e);if(!_e(e,t,Ki,!1,!0))break;if(e.line===l){for(c=e.input.charCodeAt(e.position);ve(c);)c=e.input.charCodeAt(++e.position);if(c===58)c=e.input.charCodeAt(++e.position),q(c)||m(e,`a whitespace character is expected after the key-value separator within a block mapping`),a||(e.events.splice(p.eventsLength,0,{type:w.MAPPING,start:p.position,anchorStart:i.anchorStart,anchorEnd:i.anchorEnd,tagStart:i.tagStart,tagEnd:i.tagEnd,style:N.BLOCK}),a=!0),o=!0,r=!1,s=!1;else if(o)m(e,`expected ':' after a mapping key`);else return i.anchorStart!==S||i.tagStart!==S?(me(e,p),!1):!0}else if(o)m(e,`can not read a block mapping entry; a multiline key may not be an implicit key`);else return i.anchorStart!==S||i.tagStart!==S?(me(e,p),!1):!0}if(_e(e,n,Ye,!0,s)&&(s=!1),r||s&&(O(e),s=!1),k(e,!0),c=e.input.charCodeAt(e.position),(e.line===l||e.lineIndent>n)&&c!==0)m(e,`bad indentation of a mapping entry`);else if(e.lineIndent<n)break}return o?(r&&O(e),a&&ue(e),!0):!1}function _e(e,n,t,i,r,o=!0){e.depth>=e.maxDepth&&m(e,`nesting exceeded maxDepth (${e.maxDepth})`),e.depth++;let a=1,s=!1,c=!1,d=null,l=Ti(),p=t===Ye||t===zi,u=p,y=p;if(i&&k(e,!0)&&(s=!0,e.lineIndent>n?a=1:e.lineIndent===n?a=0:a=-1),a===1)for(;;){let g=e.input.charCodeAt(e.position),v=fe(e);if(s&&a!==1&&(g===33||g===38))break;if(s&&y&&(l.tagStart!==S||l.anchorStart!==S)&&(g===33||g===38)){let I=fe(e),L=n+1;if(At(e,e.position-e.lineStart,L,l)&&e.events[I.eventsLength]?.type===w.MAPPING)return e.depth--,!0;me(e,I)}if(s&&(g===33&&l.tagStart!==S||g===38&&l.anchorStart!==S)||!Ya(e,l,t===he)&&!Ha(e,l))break;d===null&&(d=v),k(e,!0)?(s=!0,u=y,e.lineIndent>n?a=1:e.lineIndent===n?a=0:a=-1):u=!1}if(u&&(u=s||r),a===1||t===Ye){let g=t===he||t===Ki?n:n+1,v=e.position-e.lineStart;if(a===1)if(u&&(xi(e,v,l)||At(e,v,g,l))||ns(e,g,l))c=!0;else{let I=e.input.charCodeAt(e.position);if(d!==null&&o&&y&&!u&&I!==124&&I!==62){let L=fe(e),V=d.position-d.lineStart;me(e,d),At(e,V,g,Ti())&&e.events[L.eventsLength]?.type===w.MAPPING?c=!0:me(e,L)}!c&&(p&&Za(e,g,l)||Xa(e,g,l)||Ja(e,g,l)||Qa(e,l)||ts(e,g,t,l))&&(c=!0)}else a===0&&(c=u&&xi(e,v,l))}return p=p&&!c,!c&&(l.anchorStart!==S||l.tagStart!==S||p)&&(ye(e,S,S,l.anchorStart,l.anchorEnd,l.tagStart,l.tagEnd,h.PLAIN),c=!0),e.depth--,c||l.anchorStart!==S||l.tagStart!==S}function is(e){if(e.lineIndent>0||e.input.charCodeAt(e.position)!==37)return!1;e.position++;let n=e.position;for(;e.input.charCodeAt(e.position)!==0&&!B(e.input.charCodeAt(e.position));)e.position++;let t=e.input.slice(n,e.position),i=[];for(t.length===0&&m(e,`directive name must not be less than one character in length`);e.input.charCodeAt(e.position)!==0&&!A(e.input.charCodeAt(e.position));){for(;ve(e.input.charCodeAt(e.position));)e.position++;if(e.input.charCodeAt(e.position)===35||A(e.input.charCodeAt(e.position))||e.input.charCodeAt(e.position)===0)break;let r=e.position;for(;e.input.charCodeAt(e.position)!==0&&!B(e.input.charCodeAt(e.position));)e.position++;i.push(e.input.slice(r,e.position))}if(A(e.input.charCodeAt(e.position))&&He(e),t===`YAML`){e.directives.some(o=>o.kind===`yaml`)&&m(e,`duplication of %YAML directive`),i.length!==1&&m(e,`YAML directive accepts exactly one argument`);let r=/^([0-9]+)\.([0-9]+)$/.exec(i[0]);r===null&&m(e,`ill-formed argument of the YAML directive`),parseInt(r[1],10)!==1&&m(e,`unacceptable YAML version of the document`),e.directives.push({kind:`yaml`,version:i[0]})}else if(t===`TAG`){i.length!==2&&m(e,`TAG directive accepts exactly two arguments`);let[r,o]=i;Yi.test(r)||m(e,`ill-formed tag handle (first argument) of the TAG directive`),Vi.call(e.tagHandlers,r)&&m(e,`there is a previously declared suffix for "${r}" tag handle`),ja.test(o)||m(e,`ill-formed tag prefix (second argument) of the TAG directive`),e.tagHandlers[r]=o,e.directives.push({kind:`tag`,handle:r,prefix:o})}return!0}function rs(e){e.directives=[],e.tagHandlers=Object.create(null);let n=!1;for(k(e,!0);is(e);)n=!0,k(e,!0);let t=!1,i=!1,r=!0;if(e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45&&q(e.input.charCodeAt(e.position+3))){t=!0;let s=e.line;e.position+=3,k(e,!0),r=e.line>s}else n&&m(e,`directives end mark is expected`);let o=e.events.length;if(!t&&e.position===e.lineStart&&e.input.charCodeAt(e.position)===46&&ge(e)){e.position+=3,k(e,!0);return}if(Wa(e,t,!1),_e(e,e.lineIndent-1,Ye,!1,r,r)||O(e),k(e,!0),e.position===e.lineStart&&ge(e)&&(i=e.input.charCodeAt(e.position)===46,i)){let s=e.line;e.position+=3,k(e,!0),e.line===s&&e.position<e.length&&m(e,`end of the stream or a document separator is expected`)}let a=e.events[o];a?.type===w.DOCUMENT&&(a.explicitEnd=i),ue(e),!i&&e.position<e.length&&!Wt(e)&&m(e,`end of the stream or a document separator is expected`)}function os(e,n){let t=e.length,i=W$1(U(U({},jt),n),{input:`${e}\0`,length:t,position:0,line:0,lineStart:0,lineIndent:0,firstTabInLine:-1,depth:0,directives:[],tagHandlers:Object.create(null),events:[]}),r=e.indexOf(`\0`);for(r!==-1&&H.throwAt(e,r,`null byte is not allowed in input`,i.filename);i.position<i.length&&(Ji(i),k(i,!0),!(i.position>=i.length));){let o=i.position;rs(i),i.position===o&&m(i,`can not read a document`)}return i.events}var as=U(U({},jt),$t);function ss(e,n={}){let t=U(U({},as),n),i=String(e),r=Object.keys(jt),o=Object.keys($t);return Da(os(i,xt(t,r)),W$1(U({},xt(t,o)),{source:i}))}function er(e,n){let t=ss(e,n);if(t.length===0)throw new H(`expected a document, but the input is empty`);if(t.length===1)return t[0];throw new H(`expected a single document in the stream, but found more`)}var J=Symbol(`INVALID`);function cs(e){let n=new Set([e.defaultScalarTag,e.defaultSequenceTag,e.defaultMappingTag].filter(o=>o!==void 0)),t=e.implicitScalarTags,i=e.tags.filter(o=>!(o.nodeKind===`scalar`&&o.implicit)&&!n.has(o)),r=e.tags.filter(o=>n.has(o));return[...t.map(o=>({tag:o,implicitTag:!0})),...i.map(o=>({tag:o,implicitTag:!1})),...r.map(o=>({tag:o,implicitTag:!0}))]}function ls(e,n){for(let t=0,i=e.representTypes.length;t<i;t+=1){let{tag:r,implicitTag:o}=e.representTypes[t];if(r.identify(n)){let a;return r.matchByTagPrefix?a=r.representTagName(n):a=r.tagName,{tag:r,tagName:a,implicitTag:o}}}return null}function Le(e,n){if(!e.noRefs&&n!==null&&typeof n==`object`){let d=e.refs.get(n);if(d)return d.anchor===void 0&&(d.anchor=`ref_${e.refCounter++}`),{kind:`alias`,anchor:d.anchor}}let t=ls(e,n);if(!t){if(n===void 0||e.skipInvalid)return J;throw new H(`unacceptable kind of an object to dump ${Object.prototype.toString.call(n)}`)}let{tag:i,tagName:r,implicitTag:o}=t,a=o?r:Wi(r);if(i.nodeKind===`scalar`)return{kind:`scalar`,tag:a,tagged:!o,style:h.PLAIN,value:i.represent(n)};if(i.nodeKind===`sequence`){let d=i.represent(n),l={kind:`sequence`,tag:a,tagged:!o,style:N.BLOCK,items:[]};e.noRefs||e.refs.set(n,l);for(let p=0,u=d.length;p<u;p+=1){let y=Le(e,d[p]);y===J&&d[p]===void 0&&(y=Le(e,null)),y!==J&&l.items.push(y)}return l}let s=i.represent(n),c={kind:`mapping`,tag:a,tagged:!o,style:N.BLOCK,items:[]};e.noRefs||e.refs.set(n,c);for(let[d,l]of s){let p=Le(e,d);if(p===J)continue;let u=Le(e,l);u!==J&&c.items.push({key:p,value:u})}return c}function ds(e,n,t={}){let i=Le({representTypes:cs(n),noRefs:t.noRefs??!1,skipInvalid:t.skipInvalid??!1,refs:/* @__PURE__ */ new Map,refCounter:0},e);return[{contents:i===J?null:i,directives:[]}]}var ps=Symbol(`visit:break`);var tr=Symbol(`visit:skip`);function Ke(e,n,t){let i=n(e,t);if(i===ps)return!0;if(i===tr)return!1;let r=t.depth+1;switch(e.kind){case`sequence`:for(let o of e.items)if(Ke(o,n,{depth:r,parent:e,isKey:!1}))return!0;break;case`mapping`:for(let{key:o,value:a}of e.items)if(Ke(o,n,{depth:r,parent:e,isKey:!0})||Ke(a,n,{depth:r,parent:e,isKey:!1}))return!0}return!1}function Oi(e,n){for(let t of e)if(t.contents&&Ke(t.contents,n,{depth:0,parent:null,isKey:!1}))return}function et(e,n){return(e&1<<n)!==0}var Ni={applyQuoteFlowKeysOption:us,doubleQuoteForInvisibles:fs,doubleQuoteWhitespaceOnly:ms,applyForceQuotesOption:hs,tryLongOrMultilineAsBlock:gs,quoteInvalidPlain:_s,fallbackToDoubleQuoted:ys};function nr(e){return e.presenterOptions.quoteStyle===`single`&&et(e.allowedStylesMask,h.SINGLE_QUOTED)?h.SINGLE_QUOTED:h.DOUBLE_QUOTED}function us(e){e.presenterOptions.quoteFlowKeys&&(!e.isKey||!e.flowOnly||e.style!==h.PLAIN||(e.style=h.DOUBLE_QUOTED))}function fs(e){e.style===h.PLAIN&&/[\t\x7F-\xA0\u2028\u2029\uFEFF\uFFFE\uFFFF]/.test(e.node.value)&&(e.style=h.DOUBLE_QUOTED)}function ms(e){e.style===h.PLAIN&&/^\s+$/.test(e.node.value)&&(e.style=h.DOUBLE_QUOTED)}function hs(e){e.presenterOptions.forceQuotes&&(e.isKey||e.style!==h.PLAIN||e.node.tag===e.presenterOptions.schema.defaultScalarTag.tagName&&(e.style=e.node.value.includes(`
`)?h.DOUBLE_QUOTED:nr(e)))}function gs(e){if(e.style!==h.PLAIN||e.isKey)return;let n=e.node.value,t=n.indexOf(`
`)!==-1;if(!et(e.allowedStylesMask,h.LITERAL_BLOCK)){t&&(e.style=h.DOUBLE_QUOTED);return}let i=e.presenterOptions.lineWidth;if(i===-1){t&&(e.style=h.LITERAL_BLOCK);return}let r=Math.max(Math.min(i,40),i-e.shiftOfContent),o=0,a=!1;for(;o<=n.length;){let s=n.length,c=n.indexOf(`
`,o);c!==-1&&(s=c);let d=n.slice(o,s);if(d.length>r&&d[0]!==` `&&/ [^ \t]/.test(d)&&(a=!0),c===-1)break;o=c+1}a?e.style=h.FOLDED_BLOCK:t&&(e.style=h.LITERAL_BLOCK)}function _s(e){e.style===h.PLAIN&&!et(e.allowedStylesMask,h.PLAIN)&&(e.style=nr(e))}function ys(e){et(e.allowedStylesMask,e.style)||(e.style=h.DOUBLE_QUOTED)}function Ne(e,n){return e|1<<n}var vs=`[\\x09\\x0A\\x0D\\x20-\\x7E\\x85\\xA0-\\uD7FF\\uE000-\\uFFFD\\u{10000}-\\u{10FFFF}]`;var bs=`[\\n\\r]`;var Ss=`\\uFEFF`;var qt=`[ \\t]`;var ir=`(?:(?!(?:${bs}|${Ss}))${vs})`;var tt=`(?:(?!${qt})${ir})`;var rr=`[\\x09\\x20-\\uD7FF\\uE000-\\uFFFF\\u{10000}-\\u{10FFFF}]`;var or=`[-?:,\\[\\]{}#&*!|>'"%@\`]`;var Es=`[,\\[\\]{}]`;var Lt=tt;var Mt=`(?:(?!${Es})${tt})`;var Is=`(?:(?:(?!${or})${tt})|[?:-](?=${Lt}))`;var ws=`(?:(?:(?!${or})${tt})|[?:-](?=${Mt}))`;var ar=`(?:(?:(?![:#])${Lt})|:(?=${Lt}))#*`;var sr=`(?:(?:(?![:#])${Mt})|:(?=${Mt}))#*`;var cr=`(?:${qt}*${ar})*`;var lr=`(?:${qt}*${sr})*`;var dr=`${Is}#*${cr}`;var pr=`${ws}#*${lr}`;var Cs=dr;var As=pr;var Ts=`\\n+${ar}${cr}`;var ks=`\\n+${sr}${lr}`;var xs=`${dr}(?:${Ts})*`;var Os=`${pr}(?:${ks})*`;var Ns=new RegExp(`^(?:${xs})$`,`u`);var Ls=new RegExp(`^(?:${Os})$`,`u`);var Ms=new RegExp(`^(?:${Cs})$`,`u`);var Rs=new RegExp(`^(?:${As})$`,`u`);var Ps=new RegExp(`^(?:${rr})*$`,`u`);var Ds=new RegExp(`^(?:${rr}|\\n)*$`,`u`);var Fs=new RegExp(`^(?:${ir}|\\n)*$`,`u`);var Bs=/^(?:---|\.\.\.)(?=$|[ \t\n\r])/;var Gt=/^(?:---|\.\.\.)(?=$|[ \t\n\r])/m;function Us(e){let n=e.node.value;if(n!==``){if(!(e.isKey?e.flowOnly?Rs:Ms:e.flowOnly?Ls:Ns).test(n)||e.shiftOfFirstLine===0&&Bs.test(n))return!1;if(e.shiftOfContent===0){let i=n.indexOf(`
`);if(i!==-1){let r=n.slice(i+1);if(Gt.test(r))return!1}}}let t=e.presenterOptions.schema.resolveImplicitScalarTag(n).tag.tagName;return!(!e.node.tagged&&t!==e.node.tag||!e.node.tagged&&n===`=`&&t===e.presenterOptions.schema.defaultScalarTag.tagName)}function $s(e){let n=e.node.value;if(!(e.isKey?Ps:Ds).test(n)||/[ \t]\n|\n[ \t]/.test(n))return!1;if(!e.isKey&&e.shiftOfContent===0){let t=n.indexOf(`
`);if(t!==-1&&Gt.test(n.slice(t+1)))return!1}return!0}function js(e){if(e.flowOnly||!Fs.test(e.node.value))return!1;let n=e.shiftOfContent-e.shiftOfParent;return!(n<1||n>9&&/^\n* /.test(e.node.value)||e.shiftOfContent===0&&Gt.test(e.node.value))}function Ws(e){let n=Ne(0,h.DOUBLE_QUOTED);Us(e)&&(n=Ne(n,h.PLAIN)),$s(e)&&(n=Ne(n,h.SINGLE_QUOTED)),js(e)&&(n=Ne(Ne(n,h.LITERAL_BLOCK),h.FOLDED_BLOCK)),e.allowedStylesMask=n}function qs(e){switch(e.style){case h.PLAIN:return Gs(e);case h.SINGLE_QUOTED:return Vs(e);case h.LITERAL_BLOCK:return Ks(e);case h.FOLDED_BLOCK:return zs(e);case h.DOUBLE_QUOTED:return Ys(e)}}function Gs(e){return ur(e.node.value,e.shiftOfContent)}function Vs(e){return`'${ur(e.node.value,e.shiftOfContent).replace(/'/g,`''`)}'`}function Ks(e){let n=e.node.value;return`|`+mr(n,e.shiftOfParent,e.shiftOfContent)+hr(fr(n,e.shiftOfContent))}function zs(e){let n=e.node.value,t=e.presenterOptions.lineWidth,i=1/0;return t!==-1&&(i=Math.max(Math.min(t,40),t-e.shiftOfContent)),`>`+mr(n,e.shiftOfParent,e.shiftOfContent)+hr(fr(Qs(n,i),e.shiftOfContent))}function Ys(e){return`"${Zs(e.node.value)}"`}function ur(e,n){let t=e.indexOf(`
`);if(t===-1)return e;let i=` `.repeat(n),r=e.slice(0,t),o=/(\n+)([^\n]*)/g;o.lastIndex=t;let a;for(;a=o.exec(e);){let s=a[1].length,c=a[2];r+=`
`.repeat(s+1)+i+c}return r}function fr(e,n){let t=` `.repeat(n),i=0,r=``,o=e.length;for(;i<o;){let a,s=e.indexOf(`
`,i);s===-1?(a=e.slice(i),i=o):(a=e.slice(i,s+1),i=s+1),a.length&&a!==`
`&&(r+=t),r+=a}return r}function Hs(e){return/^\n* /.test(e)}function mr(e,n,t){let i=Hs(e)?String(t-n):``,r=e[e.length-1]===`
`;return`${i}${r&&(e[e.length-2]===`
`||e===`
`)?`+`:r?``:`-`}
`}function hr(e){return e[e.length-1]===`
`?e.slice(0,-1):e}function Rt(e){return e===` `||e===`	`}function Li(e,n){if(e===``||Rt(e[0]))return e;let t=/ [^ \t]/g,i,r=0,o,a=0,s=0,c=``;for(;i=t.exec(e);)s=i.index,s-r>n&&(o=a>r?a:s,c+=`
${e.slice(r,o)}`,r=o+1),a=s;return c+=`
`,e.length-r>n&&a>r?c+=`${e.slice(r,a)}
${e.slice(a+1)}`:c+=e.slice(r),c.slice(1)}function Qs(e,n){let t=/(\n+)([^\n]*)/g,i=e.indexOf(`
`);i===-1&&(i=e.length),t.lastIndex=i;let r=Li(e.slice(0,i),n),o=e[0]===`
`||Rt(e[0]),a,s;for(;s=t.exec(e);){let c=s[1],d=s[2];a=d!==``&&Rt(d[0]),r+=c+(!o&&!a&&d!==``?`
`:``)+Li(d,n),o=a}return r}var Xs=/["\\\x00-\x1F\x7F-\xA0\u2028\u2029\uD800-\uDFFF\uFEFF\uFFFE\uFFFF]/gu;function Js(e){switch(e){case`\0`:return`\\0`;case`\x07`:return`\\a`;case`\b`:return`\\b`;case`	`:return`\\t`;case`
`:return`\\n`;case`\v`:return`\\v`;case`\f`:return`\\f`;case`\r`:return`\\r`;case`\x1B`:return`\\e`;case`"`:return`\\"`;case`\\`:return`\\\\`;case``:return`\\N`;case`\xA0`:return`\\_`;case`\u2028`:return`\\L`;case`\u2029`:return`\\P`}let n=e.charCodeAt(0),t=n.toString(16).toUpperCase();return n<=255?`\\x${`0`.repeat(2-t.length)}${t}`:`\\u${`0`.repeat(4-t.length)}${t}`}function Zs(e){return e.replace(Xs,Js)}var Qe=10;var Vt={indent:2,seqNoIndent:!1,seqInlineFirst:!0,lineWidth:80,flowBracketPadding:!1,flowSkipCommaSpace:!1,flowSkipColonSpace:!1,quoteFlowKeys:!1,quoteStyle:`single`,forceQuotes:!1,scalarStyleRules:Object.keys(Ni).map(e=>Reflect.get(Ni,e)),tagBeforeAnchor:!1};function ec(e){return e.tagged?e.tag:Wi(e.tag)}function tc(e){let n=U(U({},Vt),e);return n.flowSkipColonSpace&&(n.quoteFlowKeys=!0),W$1(U({},n),{defaultScalarTagName:n.schema.defaultScalarTag.tagName,openEnded:!1})}function Pt(e,n){return`
${` `.repeat(e.indent*n)}`}function nc(e,n,t,i,r,o){return{node:n,parent:t,level:i,isKey:r,flowOnly:o,shiftOfParent:i===0?-1:e.indent*(i-1),shiftOfContent:e.indent*Math.max(1,i),shiftOfFirstLine:i===0?0:e.indent*i,presenterOptions:e,allowedStylesMask:0,style:n.style}}function ic(e,n,t){let i=``;for(let o=0,a=t.items.length;o<a;o+=1){let s=G(e,n,t.items[o],t,{}).text;o>0&&(i+=`,${e.flowSkipCommaSpace?``:` `}`),i+=s}let r=e.flowBracketPadding&&t.items.length>0?` `:``;return`[${r}${i}${r}]`}function Mi(e,n,t,i){let r=``;for(let o=0,a=t.items.length;o<a;o+=1){let s=G(e,n+1,t.items[o],t,{block:!0,compact:e.seqInlineFirst,isblockseq:!0}).text;(!i||r!==``)&&(r+=Pt(e,n)),s===``||Qe===s.charCodeAt(0)?r+=`-`:r+=`- `,r+=s}return r}function rc(e,n,t){let i=``;for(let{key:o,value:a}of t.items){let s=``;i!==``&&(s+=`,${e.flowSkipCommaSpace?``:` `}`);let c=G(e,n,o,t,{iskey:!0}),d=c.text,l=G(e,n,a,t,{}).text,p=e.flowSkipColonSpace||l===``?``:` `,u=o.kind===`scalar`&&c.noBody&&(o.tagged||o.anchor!==void 0),y=o.kind===`alias`||u?` `:``;s+=`${d}${y}:${p}${l}`,i+=s}let r=e.flowBracketPadding&&i!==``?` `:``;return`{${r}${i}${r}}`}function oc(e,n,t,i){let r=``;for(let o=0,a=t.items.length;o<a;o+=1){let s=``;(!i||r!==``)&&(s+=Pt(e,n));let{key:c,value:d}=t.items[o],l=(c.kind===`mapping`||c.kind===`sequence`)&&c.style===N.BLOCK&&c.items.length!==0||c.kind===`scalar`&&(c.style===h.LITERAL_BLOCK||c.style===h.FOLDED_BLOCK),p=l?G(e,n+1,c,t,{block:!0,compact:!0,isblockseq:!Dt(e,c,n+1)}):G(e,n+1,c,t,{block:!0,compact:!0,iskey:!0}),u=p.text,y=c.kind===`scalar`&&c.value.indexOf(`
`)!==-1,g=u.length>1024&&/^[\s\S]{1025}/u.test(u),v=l||y||g;v&&(u&&Qe===u.charCodeAt(0)?s+=`?`:s+=`? `),s+=u,v&&(s+=Pt(e,n));let I=G(e,n+1,d,t,{block:!0,compact:v,isblockseq:v&&!Dt(e,d,n+1)}).text,L=c.kind===`scalar`&&p.noBody&&(c.tagged||c.anchor!==void 0),V=!v&&(c.kind===`alias`||L)?` `:``;I===``||Qe===I.charCodeAt(0)?s+=`${V}:`:s+=`${V}: `,s+=I,r+=s}return r}function Dt(e,n,t){return n.kind===`alias`?!0:n.tagged||n.anchor!==void 0||e.indent<2&&t>0}function G(e,n,t,i,r){if(t.kind===`alias`)return e.openEnded=!1,{text:`*${t.anchor}`,noBody:!1};let{block:o=!1,iskey:a=!1,isblockseq:s=!1}=r,c=r.compact??!1,d=t.anchor!==void 0;Dt(e,t,n)&&(c=!1);let l,p=t.tagged,u=o&&(t.kind===`mapping`||t.kind===`sequence`)&&t.style===N.BLOCK&&t.items.length!==0;if(t.kind===`mapping`)u?l=oc(e,n,t,c):l=rc(e,n,t);else if(t.kind===`sequence`)u?e.seqNoIndent&&!s&&n>0?l=Mi(e,n-1,t,c):l=Mi(e,n,t,c):l=ic(e,n,t);else{let v=nc(e,t,i,n,a,!o);Ws(v);for(let I of e.scalarStyleRules)I(v);l=qs(v),e.openEnded=(v.style===h.LITERAL_BLOCK||v.style===h.FOLDED_BLOCK)&&(t.value===`
`||t.value.endsWith(`

`)),p=t.tagged||l===``&&v.flowOnly&&i?.kind===`sequence`&&!d||v.style!==h.PLAIN&&t.tag!==e.defaultScalarTagName}(t.kind===`mapping`||t.kind===`sequence`)&&!u&&(e.openEnded=!1),u&&c&&n>0&&e.indent>2&&(l=`${` `.repeat(e.indent-2)}${l}`);let y=l===``,g=l;if(p||d){let v=[],I=p?ec(t):null,L=d?`&${t.anchor}`:null;e.tagBeforeAnchor?(I!==null&&v.push(I),L!==null&&v.push(L)):(L!==null&&v.push(L),I!==null&&v.push(I));let V=l===``||l.charCodeAt(0)===Qe?``:` `;g=`${v.join(` `)}${V}${l}`}return{text:g,noBody:y}}function ac(e){return(e.kind===`sequence`||e.kind===`mapping`)&&e.style===N.BLOCK&&e.items.length!==0&&!e.tagged&&e.anchor===void 0}function sc(e){let n=``;for(let t of e.directives){if(t.kind===`yaml`){n+=`%YAML ${t.version}
`;continue}let{handle:i,prefix:r}=t;n+=`%TAG ${i} ${r}
`}return n}function cc(e,n){let t=tc(n),i=``,r=!1;for(let o=0;o<e.length;o+=1){let a=e[o];t.openEnded=!1;let s=sc(a),c=s!==``,d=a.explicitStart||c||o>0&&!r;if(i+=s,a.contents===null)d&&(i+=`---
`);else if(d){let l=G(t,0,a.contents,null,{block:!0,compact:!0}).text,p=l===``?``:c||ac(a.contents)?`
`:` `;i+=`---${p}${l}
`}else i+=G(t,0,a.contents,null,{block:!0,compact:!0}).text+`
`;r=a.explicitEnd||t.openEnded,r&&(i+=`...
`)}return i}var lc=W$1(U({},Vt),{schema:ya,skipInvalid:!1,noRefs:!1,flowLevel:-1,sortKeys:!1,transform:()=>{}});function dc(e,n){let t=String(e),i=String(n);return t<i?-1:t>i?1:0}function Hl(e,n={}){let t=U(U({},lc),n),i=ds(e,t.schema,{noRefs:t.noRefs,skipInvalid:t.skipInvalid});if(t.flowLevel>=0&&Oi(i,(r,o)=>{if(!(o.depth<t.flowLevel))return(r.kind===`sequence`||r.kind===`mapping`)&&(r.style=N.FLOW),tr}),t.sortKeys){let r=t.sortKeys===!0?dc:t.sortKeys;Oi(i,o=>{o.kind===`mapping`&&o.items.sort((a,s)=>r(a.key.kind===`scalar`?a.key.value:``,s.key.kind===`scalar`?s.key.value:``))})}return t.transform(i),cc(i,W$1(U({},xt(t,Object.keys(Vt))),{schema:t.schema}))}w.DOCUMENT;w.SEQUENCE;w.MAPPING;w.SCALAR;w.ALIAS;w.POP;h.PLAIN;h.SINGLE_QUOTED;h.DOUBLE_QUOTED;h.LITERAL_BLOCK;h.FOLDED_BLOCK;N.BLOCK;N.FLOW;M.CLIP;M.STRIP;M.KEEP;var gr=class{static parseAndValidate(n){if(!n||n.trim()===``)return{isValid:!1,parsed:null,errors:[`Specification is empty.`]};let t,i=[];try{n.trim().startsWith(`{`)?t=JSON.parse(n):t=er(n)}catch(o){return o instanceof Error?i.push(`Parse error: ${o.message}`):o&&typeof o==`object`&&`message`in o?i.push(`Parse error: ${o.message}`):i.push(`Unknown parsing error.`),{isValid:!1,parsed:null,errors:i}}if(typeof t!=`object`||t===null)return i.push(`Specification must be an object.`),{isValid:!1,parsed:null,errors:i};let r=t;if(!r.openapi&&!r.swagger&&i.push(`Missing "openapi" or "swagger" version field.`),!r.info||typeof r.info!=`object`)i.push(`Missing or invalid "info" object.`);else{let o=r.info;o.title||i.push(`Missing "info.title".`),o.version||i.push(`Missing "info.version".`)}return(!r.paths||typeof r.paths!=`object`)&&i.push(`Missing or invalid "paths" object.`),{isValid:i.length===0,parsed:t,errors:i}}};var uc=Math.pow(2,31)-1;var Me=class{_overlayRef;instance;containerInstance;_afterDismissed=new Z$1;_afterOpened=new Z$1;_onAction=new Z$1;_durationTimeoutId;_dismissedByAction=!1;constructor(n,t){this._overlayRef=t,this.containerInstance=n,n._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(n){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(n,uc))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}};var _r=new k$1(`MatSnackBarData`);var be=class{politeness=`polite`;announcementMessage=``;viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition=`center`;verticalPosition=`bottom`};var fc=(()=>{class e{static ɵfac=function(i){return new(i||e)};static ɵdir=GD({type:e,selectors:[[``,`matSnackBarLabel`,``]],hostAttrs:[1,`mat-mdc-snack-bar-label`,`mdc-snackbar__label`]})}return e})();var mc=(()=>{class e{static ɵfac=function(i){return new(i||e)};static ɵdir=GD({type:e,selectors:[[``,`matSnackBarActions`,``]],hostAttrs:[1,`mat-mdc-snack-bar-actions`,`mdc-snackbar__actions`]})}return e})();var hc=(()=>{class e{static ɵfac=function(i){return new(i||e)};static ɵdir=GD({type:e,selectors:[[``,`matSnackBarAction`,``]],hostAttrs:[1,`mat-mdc-snack-bar-action`,`mdc-snackbar__action`]})}return e})();var gc=(()=>{class e{snackBarRef=C(Me);data=C(_r);action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static ɵfac=function(i){return new(i||e)};static ɵcmp=(function(){function t(i,r){if(i&1){let o=Cw();Oi$1(0,`div`,1)(1,`button`,2),ug(`click`,function(){nd(o);let s=Xw();return rd(s.action())}),Sb(2),ml$1()()}if(i&2){let o=Xw();ZE(2),Dl(` `,o.data.action,` `)}}return BD({type:e,selectors:[[`simple-snack-bar`]],hostAttrs:[1,`mat-mdc-simple-snack-bar`],exportAs:[`matSnackBar`],decls:3,vars:2,consts:[[`matSnackBarLabel`,``],[`matSnackBarActions`,``],[`matButton`,``,`matSnackBarAction`,``,3,`click`]],template:function(r,o){r&1&&(Oi$1(0,`div`,0),Sb(1),ml$1(),pw(2,t,3,1,`div`,1)),r&2&&(ZE(),Dl(` `,o.data.message,`
`),ZE(),gw(o.hasAction?2:-1))},dependencies:[yr$1,fc,mc,hc],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2})})()}return e})();var Kt=`_mat-snack-bar-enter`;var zt=`_mat-snack-bar-exit`;var _c=(()=>{class e extends Ve$1{_ngZone=C(J$1);_elementRef=C(Lr$1);_changeDetectorRef=C(wj);_platform=C(p);_animationsDisabled=G$1();snackBarConfig=C(be);_document=C(Er$1);_trackedModals=/* @__PURE__ */ new Set;_enterFallback;_exitFallback;_injector=C(ie);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new Z$1;_onExit=new Z$1;_onEnter=new Z$1;_animationState=`void`;_live;_label;_role;_liveElementId=C(Kt$1).getId(`mat-snack-bar-container-live-`);constructor(){super();let t=this.snackBarConfig;t.politeness===`assertive`&&!t.announcementMessage?this._live=`assertive`:t.politeness===`off`?this._live=`off`:this._live=`polite`,this._platform.FIREFOX&&(this._live===`polite`&&(this._role=`status`),this._live===`assertive`&&(this._role=`alert`))}attachComponentPortal(t){this._assertNotAttached();let i=this._portalOutlet.attachComponentPortal(t);return this._afterPortalAttached(),i}attachTemplatePortal(t){this._assertNotAttached();let i=this._portalOutlet.attachTemplatePortal(t);return this._afterPortalAttached(),i}attachDomPortal=t=>{this._assertNotAttached();let i=this._portalOutlet.attachDomPortal(t);return this._afterPortalAttached(),i};onAnimationEnd(t){t===zt?this._completeExit():t===Kt&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState=`visible`,this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?RE(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Kt)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-snack-bar-fallback-visible`),this.onAnimationEnd(Kt)},200)))}exit(){return this._destroyed?ls$1(void 0):(this._ngZone.run(()=>{this._animationState=`hidden`,this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute(`mat-exit`,``),clearTimeout(this._announceTimeoutId),this._animationsDisabled?RE(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(zt)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(zt),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let t=this._elementRef.nativeElement,i=this.snackBarConfig.panelClass;i&&(Array.isArray(i)?i.forEach(a=>t.classList.add(a)):t.classList.add(i)),this._exposeToModals();let r=this._label.nativeElement,o=`mdc-snackbar__label`;r.classList.toggle(o,!r.querySelector(`.${o}`))}_exposeToModals(){let t=this._liveElementId,i=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let r=0;r<i.length;r++){let o=i[r],a=o.getAttribute(`aria-owns`);this._trackedModals.add(o),a?a.indexOf(t)===-1&&o.setAttribute(`aria-owns`,a+` `+t):o.setAttribute(`aria-owns`,t)}}_clearFromModals(){this._trackedModals.forEach(t=>{let i=t.getAttribute(`aria-owns`);if(i){let r=i.replace(this._liveElementId,``).trim();r.length>0?t.setAttribute(`aria-owns`,r):t.removeAttribute(`aria-owns`)}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let t=this._elementRef.nativeElement,i=t.querySelector(`[aria-hidden]`),r=t.querySelector(`[aria-live]`);if(i&&r){let o=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&i.contains(document.activeElement)&&(o=document.activeElement),i.removeAttribute(`aria-hidden`),r.appendChild(i),o?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static ɵfac=function(i){return new(i||e)};static ɵcmp=(function(){let t=[`label`];function i(r,o){}return BD({type:e,selectors:[[`mat-snack-bar-container`]],viewQuery:function(o,a){if(o&1&&pg(Qe$2,7)(t,7),o&2){let s;ob(s=ib())&&(a._portalOutlet=s.first),ob(s=ib())&&(a._label=s.first)}},hostAttrs:[1,`mdc-snackbar`,`mat-mdc-snack-bar-container`],hostVars:6,hostBindings:function(o,a){o&1&&ug(`animationend`,function(c){return a.onAnimationEnd(c.animationName)})(`animationcancel`,function(c){return a.onAnimationEnd(c.animationName)}),o&2&&Eg(`mat-snack-bar-container-enter`,a._animationState===`visible`)(`mat-snack-bar-container-exit`,a._animationState===`hidden`)(`mat-snack-bar-container-animations-enabled`,!a._animationsDisabled)},features:[Ah],decls:6,vars:3,consts:[[`label`,``],[1,`mdc-snackbar__surface`,`mat-mdc-snackbar-surface`],[1,`mat-mdc-snack-bar-label`],[`aria-hidden`,`true`],[`cdkPortalOutlet`,``]],template:function(o,a){o&1&&(Oi$1(0,`div`,1)(1,`div`,2,0)(3,`div`,3),Oh(4,i,0,0,`ng-template`,4),ml$1(),Bh(5,`div`),ml$1()()),o&2&&(ZE(5),Vh(`aria-live`,a._live)(`role`,a._role)(`id`,a._liveElementId))},dependencies:[Qe$2],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--%NS%mat-snack-bar-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-snack-bar-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-snack-bar-container-color, var(--%NS%mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--%NS%mat-snack-bar-supporting-text-font, var(--%NS%mat-sys-body-medium-font));
  font-size: var(--%NS%mat-snack-bar-supporting-text-size, var(--%NS%mat-sys-body-medium-size));
  font-weight: var(--%NS%mat-snack-bar-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  line-height: var(--%NS%mat-snack-bar-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--%NS%mat-snack-bar-button-color, var(--%NS%mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --%NS%mat-button-text-state-layer-color: currentColor;
  --%NS%mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2,changeDetection:1})})()}return e})();var yc=new k$1(`mat-snack-bar-default-options`,{providedIn:`root`,factory:()=>new be});var yr=(()=>{class e{_live=C(Rn);_injector=C(ie);_breakpointObserver=C(zt$1);_parentSnackBar=C(e,{optional:!0,skipSelf:!0});_defaultConfig=C(yc);_animationsDisabled=G$1();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=gc;snackBarContainerComponent=_c;handsetCssClass=`mat-mdc-snack-bar-handset`;get _openedSnackBarRef(){let t=this._parentSnackBar;return t?t._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(t){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=t:this._snackBarRefAtThisLevel=t}openFromComponent(t,i){return this._attach(t,i)}openFromTemplate(t,i){return this._attach(t,i)}open(t,i=``,r){let o=U(U({},this._defaultConfig),r);return o.data={message:t,action:i},o.announcementMessage===t&&(o.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,o)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(t,i){let r=i&&i.viewContainerRef&&i.viewContainerRef.injector,o=ie.create({parent:r||this._injector,providers:[{provide:be,useValue:i}]}),a=new Ne$1(this.snackBarContainerComponent,i.viewContainerRef,o),s=t.attach(a);return s.instance.snackBarConfig=i,s.instance}_attach(t,i){let r=U(U(U({},new be),this._defaultConfig),i),o=this._createOverlay(r),a=this._attachSnackBarContainer(o,r),s=new Me(a,o);if(t instanceof xr$1){let c=new re(t,null,{$implicit:r.data,snackBarRef:s});s.instance=a.attachTemplatePortal(c)}else{let c=this._createInjector(r,s),d=new Ne$1(t,void 0,c);s.instance=a.attachComponentPortal(d).instance}return this._breakpointObserver.observe(pi$1.HandsetPortrait).pipe(Ql(o.detachments())).subscribe(c=>{o.overlayElement.classList.toggle(this.handsetCssClass,c.matches)}),r.announcementMessage&&a._onAnnounce.subscribe(()=>{this._live.announce(r.announcementMessage,r.politeness)}),this._animateSnackBar(s,r),this._openedSnackBarRef=s,this._openedSnackBarRef}_animateSnackBar(t,i){t.afterDismissed().subscribe(()=>{this._openedSnackBarRef==t&&(this._openedSnackBarRef=null),i.announcementMessage&&this._live.clear()}),i.duration&&i.duration>0&&t.afterOpened().subscribe(()=>t._dismissAfter(i.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{t.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):t.containerInstance.enter()}_createOverlay(t){let i=new Ce;i.direction=t.direction;let r=We(this._injector),o=t.direction===`rtl`,a=t.horizontalPosition===`left`||t.horizontalPosition===`start`&&!o||t.horizontalPosition===`end`&&o,s=!a&&t.horizontalPosition!==`center`;return a?r.left(`0`):s?r.right(`0`):r.centerHorizontally(),t.verticalPosition===`top`?r.top(`0`):r.bottom(`0`),i.positionStrategy=r,i.disableAnimations=this._animationsDisabled,nt$1(this._injector,i)}_createInjector(t,i){let r=t&&t.viewContainerRef&&t.viewContainerRef.injector;return ie.create({parent:r||this._injector,providers:[{provide:Me,useValue:i},{provide:_r,useValue:t.data}]})}static ɵfac=function(i){return new(i||e)};static ɵprov=Yt({token:e,factory:e.ɵfac})}return e})();var vr=class e{snackBar=C(yr);success(n){this.snackBar.open(n,`Close`,{duration:3e3,panelClass:[`toast-success`]})}error(n){this.snackBar.open(n,`Close`,{duration:5e3,panelClass:[`toast-error`]})}info(n){this.snackBar.open(n,`Close`,{duration:3e3,panelClass:[`toast-info`]})}static ɵfac=function(t){return new(t||e)};static ɵprov=fe$1({token:e,factory:e.ɵfac,providedIn:`root`})};var br=class e{STORAGE_KEY=`cdd_theme`;document=C(Er$1);platformId=C(jy);window=C(ar$1);isDarkTheme=ei(this.loadInitialTheme());constructor(){Nd(()=>{let n=this.isDarkTheme();mo$1(this.platformId)&&(n?this.document.documentElement.classList.add(`dark-theme`):this.document.documentElement.classList.remove(`dark-theme`),localStorage.setItem(this.STORAGE_KEY,n?`dark`:`light`))})}toggleTheme(){this.isDarkTheme.update(n=>!n)}setTheme(n){this.isDarkTheme.set(n)}loadInitialTheme(){if(!mo$1(this.platformId))return!1;let n=localStorage.getItem(this.STORAGE_KEY);return n===`dark`?!0:n===`light`?!1:!!(this.window?.matchMedia&&this.window.matchMedia(`(prefers-color-scheme: dark)`).matches)}static ɵfac=function(t){return new(t||e)};static ɵprov=fe$1({token:e,factory:e.ɵfac,providedIn:`root`})};var Sr={singleLanguageMode:!1,eagerLoadWasm:!1,appName:`CDD (WASM) web UI`,footerText:`© 2026 Compiler Driven Development (CDD) WASM web demo.`,wasmSizeText:`~72MB`,loadWasmButtonText:`Load ~72MB of WASM`,languages:[{id:`c`,name:`C (C89)`,repo:`cdd-c`,availableInWasm:!0,selectedByDefault:!1,iconUrl:`assets/icons/c.svg`},{id:`cpp`,name:`C++`,repo:`cdd-cpp`,availableInWasm:!0,selectedByDefault:!1,iconUrl:`assets/icons/cpp.svg`},{id:`csharp`,name:`C#`,repo:`cdd-csharp`,availableInWasm:!0,selectedByDefault:!1,iconUrl:`assets/icons/csharp.svg`},{id:`go`,name:`Go`,repo:`cdd-go`,availableInWasm:!0,selectedByDefault:!1,iconUrl:`assets/icons/go.svg`},{id:`java`,name:`Java`,repo:`cdd-java`,availableInWasm:!0,selectedByDefault:!1,iconUrl:`assets/icons/java.svg`},{id:`kotlin`,name:`Kotlin`,repo:`cdd-kotlin`,availableInWasm:!0,selectedByDefault:!1,iconUrl:`assets/icons/kotlin.svg`},{id:`php`,name:`PHP`,repo:`cdd-php`,availableInWasm:!0,selectedByDefault:!1,iconUrl:`assets/icons/php.svg`},{id:`python`,name:`Python`,repo:`cdd-python-all`,availableInWasm:!0,selectedByDefault:!1,iconUrl:`assets/icons/python.svg`},{id:`ruby`,name:`Ruby`,repo:`cdd-ruby`,availableInWasm:!0,selectedByDefault:!1,iconUrl:`assets/icons/ruby.svg`},{id:`rust`,name:`Rust`,repo:`cdd-rust`,availableInWasm:!0,selectedByDefault:!0,iconUrl:`assets/icons/rust.svg`},{id:`sh`,name:`Shell`,repo:`cdd-sh`,availableInWasm:!0,selectedByDefault:!1,iconUrl:`assets/icons/sh.svg`},{id:`swift`,name:`Swift`,repo:`cdd-swift`,availableInWasm:!0,selectedByDefault:!1,iconUrl:`assets/icons/swift.svg`},{id:`typescript`,name:`TypeScript`,repo:`cdd-ts`,availableInWasm:!0,selectedByDefault:!0,iconUrl:`assets/icons/typescript.svg`}]};var Er=Sr.languages;var Ir=class e{http=C(ot);languages=ei(Er);loadWasmSupport(){return es$1(this,null,function*(){try{let n=yield Cm(this.http.get(`assets/wasm-support.json`));n&&this.languages.update(t=>t.map(i=>{let r=i.id;return i.id===`typescript`&&(r=`ts`),i.id===`openapi`&&(r=`cpp`),i.id===`python`?W$1(U({},i),{availableInWasm:n[`python-all`]??n.python??!1}):W$1(U({},i),{availableInWasm:n[r]??!1})}))}catch(n){console.warn(`Failed to load WASM support config`,n)}})}static ɵfac=function(t){return new(t||e)};static ɵprov=fe$1({token:e,factory:e.ɵfac,providedIn:`root`})};var nt=class e{globalDate=C(ru);logsSignal=ei([]);logs=this.logsSignal.asReadonly();info(n,...t){console.info(`[INFO]: ${n}`,...t),this.addLog(`INFO`,n,t)}warn(n,...t){console.warn(`[WARN]: ${n}`,...t),this.addLog(`WARN`,n,t)}error(n,...t){console.error(`[ERROR]: ${n}`,...t),this.addLog(`ERROR`,n,t)}clear(){this.logsSignal.set([])}addLog(n,t,i){this.logsSignal.update(r=>[...r,{level:n,message:t,timestamp:new this.globalDate().toISOString(),params:i}])}static ɵfac=function(t){return new(t||e)};static ɵprov=fe$1({token:e,factory:e.ɵfac,providedIn:`root`})};var Cr={"cdd-c":`https://github.com/SamuelMarks/cdd-c/releases/latest/download/cdd-c.wasm`,"cdd-cpp":`https://github.com/SamuelMarks/cdd-cpp/releases/latest/download/cdd-cpp.wasm`,"cdd-csharp":`https://github.com/SamuelMarks/cdd-csharp/releases/latest/download/cdd-csharp.wasm`,"cdd-csharp-wasm.zip":`https://github.com/SamuelMarks/cdd-csharp/releases/latest/download/cdd-csharp-wasm.zip`,"cdd-go":`https://github.com/SamuelMarks/cdd-go/releases/latest/download/cdd-go.wasm`,"cdd-java.js.wasm":`https://github.com/SamuelMarks/cdd-java/releases/latest/download/cdd-java.js.wasm`,"cdd-java.js":`https://github.com/SamuelMarks/cdd-java/releases/latest/download/cdd-java.js`,"cdd-java":`https://github.com/SamuelMarks/cdd-java/releases/latest/download/cdd-java.wasm`,"cdd-kotlin":`https://github.com/offscale/cdd-kotlin/releases/latest/download/cdd-kotlin.wasm`,"cdd-php":`https://github.com/SamuelMarks/cdd-php/releases/latest/download/cdd-php.wasm`,"cdd-python-all":`https://github.com/offscale/cdd-python-all/releases/latest/download/cdd-python-all.wasm`,"cdd-ruby":`https://github.com/SamuelMarks/cdd-ruby/releases/latest/download/cdd-ruby.wasm`,"cdd-rust":`https://github.com/offscale/cdd-rust/releases/latest/download/cdd-rust.wasm`,"cdd-sh":`https://github.com/SamuelMarks/cdd-sh/releases/latest/download/cdd-sh.wasm`,"cdd-swift":`https://github.com/SamuelMarks/cdd-swift/releases/latest/download/cdd-swift.wasm`,"cdd-ts":`https://github.com/offscale/cdd-ts/releases/latest/download/cdd-ts-javy.wasm`};var wr=Object.keys(Cr);var it=class e{binaryCache=/* @__PURE__ */ new Map;config=C(ut);dialog=C(ii);hasApprovedWasmLoad=!1;doc=C(Er$1,{optional:!0});getGithubWasmUrl(n){return Cr[n]||``}getLocalWasmPath(n){return`./assets/wasm/${n.split(`/`).pop()||``}`}getEnvUrl(n){let t=this.getGithubWasmUrl(n);return t?this.getLocalWasmPath(t):``}fetchWasmResponse(n){return es$1(this,null,function*(){let t=this.getEnvUrl(n);if(!t)throw new Error(`No URL configured for ecosystem: ${n}`);return fetch(t)})}preloadAllWasm(n){return es$1(this,null,function*(){let t=0,i=wr.length;yield Promise.all(wr.map(r=>es$1(this,null,function*(){if(r===`cdd-csharp`||r===`cdd-csharp-wasm.zip`||r===`cdd-java.js`){t++,n&&n(t,i);return}try{let o=yield this.fetchWasmResponse(r);if(!o.ok){console.warn(`Failed to preload ${r}: ${o.statusText}`);return}let a=yield o.arrayBuffer(),s=new Uint8Array(a),c=s.length>=4?s[0]<<24|s[1]<<16|s[2]<<8|s[3]:0;c===6386541||c===1347093252?this.binaryCache.set(r,a):console.warn(`Failed to preload ${r}: Invalid magic number`)}catch(o){console.error(`Failed to preload ${r}:`,o)}finally{t++,n&&n(t,i)}}))),this.hasApprovedWasmLoad=!0})}loadWasmBinary(n){return es$1(this,null,function*(){if(this.binaryCache.has(n))return this.binaryCache.get(n);try{let t=yield this.fetchWasmResponse(n);if(!t.ok)throw t.status===404?/* @__PURE__ */ new Error(`WASM binary not found for ${n}. Ensure it is generated and available.`):/* @__PURE__ */ new Error(`Failed to load WASM binary for ${n}: ${t.statusText}`);let i=t.headers.get(`content-type`);i&&!i.includes(`wasm`)&&!i.includes(`application/octet-stream`)&&console.warn(`Unexpected content-type for WASM binary: ${i}. Continuing anyway.`);let r=yield t.arrayBuffer(),o=new Uint8Array(r),a=o.length>=4?o[0]<<24|o[1]<<16|o[2]<<8|o[3]:0;if(!(a===6386541)&&!(a===1347093252))throw new Error(`Invalid WASM binary downloaded for ${n}: Missing magic number.`);return this.binaryCache.set(n,r),r}catch(t){throw console.error(`Error loading WASM binary for ${n}:`,t),t}})}clearCache(){this.binaryCache.clear()}static ɵfac=function(t){return new(t||e)};static ɵprov=fe$1({token:e,factory:e.ɵfac,providedIn:`root`})};var rt=class e{http=C(ot);config=C(ut);nextRequestId=1;getRpcUrl(){let n=this.config.rpcUrl();if(!n)throw new Error(`Offline mode active. Cannot call JSON-RPC endpoint.`);return n}getMcpMessageUrl(){let n=this.config.mcpMessageUrl();if(!n)throw new Error(`Offline mode active. Cannot call MCP endpoint.`);return n}connectMcpSse(){let n=this.config.mcpSseUrl();if(!n)throw new Error(`Offline mode active. Cannot call MCP SSE endpoint.`);return this.http.get(n,{responseType:`text`})}callRpc(n,t){let i=U({jsonrpc:`2.0`,id:this.nextRequestId++,method:n},t!==void 0?{params:t}:{});return this.http.post(this.getRpcUrl(),i).pipe(le(r=>{if(r.error)throw new Error(r.error.message||`JSON-RPC error ${r.error.code}`);return r.result}))}rpcPing(){return this.callRpc(`ping`)}rpcVersion(){return this.callRpc(`version`)}rpcToDocsJson(n){return this.callRpc(`to_docs_json`,n)}rpcGetOrganization(n){return this.callRpc(`get_organization`,{org_id:n})}rpcGetRepository(n){return this.callRpc(`get_repository`,{repo_id:n})}rpcGetUserRole(n,t){return this.callRpc(`get_user_role`,{org_id:n,user_id:t})}rpcCreateOrganization(n){return this.callRpc(`create_organization`,n)}rpcCreateRepository(n){return this.callRpc(`create_repository`,n)}callMcp(n,t){let i=U({jsonrpc:`2.0`,id:this.nextRequestId++,method:n},t!==void 0?{params:t}:{});return this.http.post(this.getMcpMessageUrl(),i).pipe(le(r=>{if(r.error)throw new Error(r.error.message||`MCP error ${r.error.code}`);return r.result}))}mcpInitialize(){return this.callMcp(`initialize`,{protocolVersion:`2024-11-05`,capabilities:{},clientInfo:{name:`cdd-web-ui`,version:`0.0.4`}})}mcpPing(){return this.callMcp(`ping`)}mcpListTools(){return this.callMcp(`tools/list`)}mcpCallTool(n,t){return this.callMcp(`tools/call`,{name:n,arguments:t})}mcpGenerateSdk(n){return this.mcpCallTool(`cdd_generate_sdk`,U(U({target_language:n.target_language},n.input!==void 0?{input:n.input}:{}),n.output!==void 0?{output:n.output}:{}))}static ɵfac=function(t){return new(t||e)};static ɵprov=fe$1({token:e,factory:e.ɵfac,providedIn:`root`})};var Ar=class e{loaderService=C(it);loggingService=C(nt);config=C(ut,{optional:!0});mcpRpc=C(rt,{optional:!0});worker=null;workerLoadError=null;activeJobIds=/* @__PURE__ */ new Set;constructor(){typeof Worker<`u`?(this.worker=new Worker(new URL(`worker-YS22EIWY.js`,import.meta.url),{type:`module`}),this.worker.addEventListener(`error`,n=>{this.workerLoadError=new Error(n.message||`Web Worker failed to load.`)})):console.warn(`Web Workers are not supported in this environment. WASM operations may block UI.`)}generateCodeRemote(o,a){return es$1(this,arguments,function*(n,t,i=`to_sdk`,r={}){if(!this.mcpRpc)throw new Error(`McpRpcService is not available.`);let s=new TextEncoder;if(i===`to_docs_json`){let l=n.replace(/^cdd-/,``).replace(/-all$/,``),p=yield Cm(this.mcpRpc.rpcToDocsJson({target_language:l,input:t,no_imports:!!r.noImports,no_wrapping:!!r.noWrapping})),u=typeof p==`string`?p:JSON.stringify(p,null,2);return[{path:`docs.json`,content:s.encode(u)}]}let d=(yield Cm(this.mcpRpc.mcpCallTool(n,{target:i,spec:t,options:r}))).content?.[0]?.text??``;return[{path:`${n}/output.txt`,content:s.encode(d)}]})}generateCode(o,a){return es$1(this,arguments,function*(n,t,i=`to_sdk`,r={}){let s=this.config?.runMode?.();if(this.config?.isOnline?.()&&this.mcpRpc&&(s===`local_cdd_ctl_wasm`||s===`local_cdd_ctl_native`))try{return yield this.generateCodeRemote(n,t,i,r)}catch(d){}if(!this.worker)throw new Error(`Web Worker not initialized.`);if(this.workerLoadError)throw this.workerLoadError;let c;return n!==`cdd-csharp`&&(c=yield this.loaderService.loadWasmBinary(n)),new Promise((d,l)=>{let p=Math.random().toString(36).substring(7);this.activeJobIds.add(p);let u=()=>{this.activeJobIds.delete(p),this.worker?.removeEventListener(`message`,g),this.worker?.removeEventListener(`error`,y)},y=v=>{u(),l(new Error(v.message||`Web Worker error`))},g=v=>{let{status:I,data:L,error:V,level:ot,message:at,jobId:Tr}=v.data;if(I===`log`){this.activeJobIds.values().next().value===p&&(ot===`INFO`?this.loggingService.info(at):ot===`WARN`?this.loggingService.warn(at):ot===`ERROR`&&this.loggingService.error(at));return}Tr===p&&(u(),I===`success`?d(L):l(new Error(V||`Unknown worker error`)))};this.worker.addEventListener(`message`,g),this.worker.addEventListener(`error`,y),this.worker.postMessage({action:`generateSdk`,jobId:p,payload:{ecosystem:n,specContent:t,wasmBinary:c,target:i,languageOptions:r,cddJavaJsUrl:new URL(this.loaderService.getEnvUrl(`cdd-java.js`),document.baseURI).href,cddJavaWasmUrl:new URL(this.loaderService.getEnvUrl(`cdd-java`),document.baseURI).href,cddCsharpDirUrl:new URL(`./assets/wasm/cdd-csharp/`,document.baseURI).href}})})})}terminate(){this.activeJobIds.clear(),this.worker&&(this.worker.terminate(),this.worker=null)}static ɵfac=function(t){return new(t||e)};static ɵprov=fe$1({token:e,factory:e.ɵfac,providedIn:`root`})};export{jc as A,br as C,gr as D,gl as E,si as F,uo as I,vr as L,kr as M,ml as N,hl as O,nt as P,wc as R,bc as S,er as T,Sr as _,Cc as a,_l as b,Gl as c,Nc as d,Oc as f,Sc as g,Rc as h,Bc as i,jr as j,it as k,Hl as l,Pc as m,Ac as n,Ec as o,Or as p,Ar as r,Fc as s,$c as t,Ir as u,Tc as v,el as w,ai as x,Zc as y,xc as z};