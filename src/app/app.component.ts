import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  i=0;
  data: any[] = [];
  data2: any[] = [];


///////////////////////////////////////

title: string='';
text:string=''
warnung: string='';
warnungId: number=0;
updateID:number;
showSpeichern:boolean= true;
showUpdate:boolean=false;
data4 ={

  title:this.title,
  text:this.text
}

data3 ={

  title:this.title,
  text:this.text
}
  status: string;
  errorMessage: any;


//////////////////

ctitle:string;
ctext:string;
warnung7:string='1';

checkTitle(value:any){
  this.ctitle= value;

  }

  checkText(value:any){
    this.ctext= value;
    }


check(){



  if(this.ctitle==this.data[1].title && this.ctext==this.data[1].text){
    this.warnung7="it works"
  } else {this.warnung7='try again'};
  // for (let i = 0; i < this.data.length; i++) {


  //   if(this.ctitle==this.data[i].title && this.ctext==this.data[i].text){
  //     this.warnung7="it works"
  //   } else {this.warnung7='try again'};
  // }


}
















//////////////////////////

addTitle(value:any){
    this.title= value;
    this.data3 ={

  title:this.title,
  text:this.text
    }
    }

addText(value:any){
        this.text= value;
        this.data3 ={

  title:this.title,
  text:this.text
        }
        }

// adList(){


//       this.data3.push({ id: this.id, title:this.title, price:this.price,
//         author:this.author});

//       }






/////////////////////////////////////

  constructor(private dataService: DataService) {}
colorBlue:string='';
colorRed:string='';
colorOrange:string='';

blueButton(){
  this.colorBlue="background-color: rgb(207, 207, 247);"
}
redButton(){
  this.colorBlue="background-color: rgb(248, 200, 200);"
}
orangeButton(){
  this.colorBlue="background-color:rgb(245, 226, 191);"
}

  sendData(){


    if(this.title!=''){
      this.warnung='';

    this.ngOnInit()

    this.dataService.createData(this.data3).subscribe(
     (response:any[]) => {
      console.log('Löschen erforderlich', response);
      // Perform any additional actions after successful creation
    },
    (error) => {
      console.error('Error ', error);
      console.log('Antwort body:', error.error);
      // Handle error case
    }

  );
  this.ngOnInit()

  this.title=''
  this.text=''
}else {
  this.warnung='Titel und Text konnen nicht leer sein'
}


}


      //update


      update1(id, title1, text1){
        this.showSpeichern=false;
        this.showUpdate=true;
        this.updateID=id;
        this.warnungId=this.updateID;
        if(this.title=='' && this.text=='') {

        this.title=title1;
        this.text=text1;


      this.data4 ={

        title:title1,
        text:text1
      }
      this.data3 ={

        title:title1,
        text:text1
      }
    } else this.warnung="Zuerst maken Sie Update bitte!"
      //this.delete(id)
      }


      update2(){

          this.update(this.updateID)
          this.ngOnInit()
          this.title=''
         this.text=''
         this.showSpeichern=true;
          this.showUpdate=false;
      }

      update(id) {
        this.ngOnInit()

        this.dataService.updateData(id, this.data3).subscribe(
          () => {
            console.log('Data updated successfully');
            this.ngOnInit()
            // Perform any additional actions after successful update
          },
          (error) => {
            console.error('Failed to update data:', error);
            // Handle error
          }
        );

      }



/////////////////////delete
delete(id: number) {
this.ngOnInit()
  this.dataService.deleteData(id).subscribe(
    () => {
      console.log(id, 'Data deleted successfully');
      // Perform any additional actions after successful deletion
      this.ngOnInit()
    },
    (error) => {
      console.error('Failed to delete data:', error);
      // Handle error
    }
  );
  this.ngOnInit()}








  ngOnInit(): void {


    this.dataService.getData().subscribe({
      next: (res: any[])=> {
        console.log(res)
        this.data=res;
        console.log(this.data)},

    error: (error) => console.log(error.message),

    complete: () => console.info('Api call completed')
      });


      // this.dataService.createData(this.data3).subscribe({
      //   next:(response:any[]) => {
      //     console.log('Data created successfully', response);
      //     // Perform any additional actions after successful creation
      //   },
      //  error:(error) => {
      //     console.error('Error creating data4', error);
      //     // Handle error case

      // }
      // }


    //   );
    // }




  };}


function next(value: Object): void {
  throw new Error('Function not implemented.');
}

