import {Component, OnInit} from "@angular/core";
import {knownFolders, Folder, File, path} from "tns-core-modules/file-system";
import {getFile, HttpResponse, request} from "tns-core-modules/http";


@Component({
    selector: "Search",
    moduleId: module.id,
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {
    listArray;

    constructor() {
        // Use the constructor to inject services.
    }

    ngOnInit(): void {
        const androidDownloadsPath = android.os.Environment.getExternalStoragePublicDirectory(android.os.Environment.DIRECTORY_DOWNLOADS).toString();
        // console.log(androidDownloadsPath);


        const folderPath = androidDownloadsPath;

        let internalFolder = Folder.fromPath(folderPath);
        // console.log(Folder.exists(internalFolder.path));
        // console.log('fs.knownFolders.currentApp()', knownFolders.currentApp());
        const directorioApp = knownFolders.currentApp();
        const nombreCarpeta = "archivos-babylon";
        const nombreArchivo = 'babylon.txt';
        const contenidoArchivo = 'Aqui contenido' + new Date().getTime();
        const carpeta = directorioApp.getFolder(nombreCarpeta);
        const archivo = carpeta.getFile(nombreArchivo);
        // archivo
        //     .writeText(contenidoArchivo)
        //     .then(
        //         (resultado) => {
        //             console.log('Resultado: ', resultado);
        //             archivo
        //                 .readText()
        //                 .then(
        //                     (res) => {
        //                         console.log(res);
        //                     });
        //         },
        //         (error) => {
        //             console.log('Error: ', error);
        //         }
        //     );

        const pdfADescargar = path.join(carpeta.path, 'usuario.babylon');
        console.log('Va a descargar');


        setTimeout(
            ()=>{
                request({
                    url: "http://192.168.20.101:3000",
                    method: "GET"
                }).then((response: HttpResponse) => {
                    console.log(response);
                }, (e) => {
                    console.log(e);
                });

                getFile('http://192.168.20.101:3000/descargar', pdfADescargar)
                    .then(
                        (data) => {
                            console.log('Data: ', data);
                        },
                        (error) => {
                            console.log('Error: ', error);
                        }
                    )
                    .catch(
                        (e)=>{
                            console.log('Q CULO',e);
                        }
                    );
                console.log('Ya promeseando');
            },3000
        )


        // console.log(internalFolder);
        // internalFolder
        //     .getEntities()
        //     .then((entities) => {
        //         console.log(entities);
        //         // entities is array with the document's files and folders.
        //         // entities.forEach((entity) => {
        //         //     let  fileSize  =  fs.File.fromPath(entity.path).size;
        //         //     this.listArray.push({
        //         //         name: entity.name,
        //         //         path: entity.path,
        //         //         lastModified: entity.lastModified.toString(),
        //         //         size : fileSize
        //         //     });
        //         // });
        //         // console.log('LIST ARRAY:', this.listArray)
        //     }).catch((err) => {
        //     // Failed to obtain folder's contents.
        //     console.log('ERROR: ', err);
        //     console.log(err.stack);
        // });
    }
}
