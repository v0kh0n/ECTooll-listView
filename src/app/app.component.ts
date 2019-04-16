import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    
    public cols1 = [
        {
            name:"checkbox",
            prop: ""
        },
        
        {
            name:"Account",
            prop: "account"
        },

        {
            name:"Name",
            prop: "name"
        },
        {
            name:"Type",
            prop: "type"
        },
        {
            name:"status",
            prop: true
        },
        {
            name:"action",
            actions:[
                {
                    icon: "test",
                    link:"/adadsada"
                },

                {
                    icon: "test",
                    link:"/adadsada"
                },

                {
                    icon: "test",
                    link:"/adadsada"
                },
            ]
        }

    ];

    public cols2 = [
        // {
        //     name:"checkbox",
        //     prop: ""
        // },
        
        {
            name:"Account",
            prop: "account"
        },

        {
            name:"Name",
            prop: "name"
        },
        {
            name:"Type",
            prop: "type"
        },
        // {
        //     name:"status",
        //     prop: true
        // },
        // {
        //     name:"action",
        //     actions:[
        //         {
        //             icon: "test",
        //             link:"/adadsada"
        //         },

        //         {
        //             icon: "test",
        //             link:"/adadsada"
        //         },

        //         {
        //             icon: "test",
        //             link:"/adadsada"
        //         },
        //     ]
        // }

    ];

    public data = [
        {
            id: 1,
            account: "HoaiNT14",
            name: "Thanh Hoài",
            type: "EC"
        },

        {
            id: 2,
            account: "KietTT4",
            name: "Tuấn Kiệt",
            type: "EC"
        },

        {
            id: 3,
            account: "Test3",
            name: "Name 3",
            type: "EC"
        },

        {
            id: 1,
            account: "Test4",
            name: "Test Name 4",
            type: "EC"
        }
    ];

}
