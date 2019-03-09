import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {LoadEventData, WebView} from "tns-core-modules/ui/web-view";
import {Label} from "tns-core-modules/ui/label";
import {TextField} from "tns-core-modules/ui/text-field";

@Component({
    selector: "Browse",
    moduleId: module.id,
    templateUrl: "./browse.component.html",
    styles: [
            `
            .icon {
                font-family: 'icomoon';
                vertical-align: center;
                margin: 6;
            }
        `
    ]
})
export class BrowseComponent implements AfterViewInit {
    intentos = 0;
    public webViewSrc: string = "https://docs.nativescript.org/";
    // public enabled: boolean = false;
    @ViewChild("webViewRef") webViewRef;
    // @ViewChild("urlField") urlFieldRef: ElementRef;
    // @ViewChild("labelResult") labelResultRef: ElementRef;


    paginaWeb = "~/babylonjs/index.html";

    ngAfterViewInit() {
        // let webview: WebView = this.webViewRef.nativeElement;
        //
        // webview.on(WebView.loadFinishedEvent, function (args: LoadEventData) {
        //     let message;
        //     if (!args.error) {
        //         message = "WebView finished loading of " + args.url;
        //     } else {
        //         message = "Error loading " + args.url + ": " + args.error;
        //     }
        //
        //
        //     console.log("WebView message - " + message);
        // });
        this.eliminarControlesDeZoomEnAndroid();

    }

    eliminarControlesDeZoomEnAndroid(){
        const nativeElement: WebView = this.webViewRef.nativeElement;
        if(this.intentos < 10){
            if(nativeElement.android){
                nativeElement.android.getSettings().setBuiltInZoomControls(false);
            }else{
                setTimeout(
                    ()=>{
                        this.intentos++;
                        this.eliminarControlesDeZoomEnAndroid();
                    },
                    2000
                );
            }
        }else{

        }


    }

    // goBack() {
    //     let webview: WebView = this.webViewRef.nativeElement;
    //     if (webview.canGoBack) {
    //         webview.goBack();
    //         this.enabled = true;
    //     }
    // }
    // goForward() {
    //     let webview: WebView = this.webViewRef.nativeElement;
    //     if (webview.canGoForward) {
    //         webview.goForward();
    //     } else {
    //         this.enabled = false;
    //     }
    // }
    // submit(args: string) {
    //     let textField: TextField = this.urlFieldRef.nativeElement;
    //     this.enabled = false;
    //     if (args.substring(0, 4) === "http") {
    //         this.webViewSrc = args;
    //         textField.dismissSoftInput();
    //     } else {
    //         alert("Please, add `http://` or `https://` in front of the URL string");
    //     }
    // }
}
