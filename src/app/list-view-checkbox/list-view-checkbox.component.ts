import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-list-view-checkbox',
    templateUrl: './list-view-checkbox.component.html',
    styleUrls: ['./list-view-checkbox.component.css']
})
export class ListViewCheckboxComponent implements OnInit {

    users: any[] = [];
    isCheckAll = false;
    @Input("data") data = [];
    @Input("cols") cols = [];
    
    constructor() { }

    ngOnInit() {
        for(let i = 0; i < this.cols.length; i++) {
            if(this.cols[i].name.toLowerCase() === "checkbox"){
                this.users = this.data.map((item, index) => {
                    item.isCheck = false;
                    return item;
                })
            }
        }

        if(this.users.length <= 0) {
            this.users = this.data;
        }
        
        console.log("users: ", this.users);
        console.log("cols: ", this.cols);
    }

    onHandleChange() {
        console.log("onhandlechange: ", this.users)
    }



    onToggleCheckAll(){
        for(let i = 0; i < this.users.length; i++) {
            this.users[i].isCheck = this.isCheckAll;
        }
    }

}
