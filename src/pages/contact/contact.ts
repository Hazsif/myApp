import { PeopleProvider } from './../../providers/people/people';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailContactPage } from './../../pages/detail-contact/detail-contact';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  public people = [];
  public errorMessage : string;

  // public people = [
  //   {
  //   gender: "male",
  //   name: { title: "mr", first: "julian", last: "kohl"},
  //   location: {
  //     street: "6797 muhlenweg",
  //     city: "kleve",
  //     state: "bremen",
  //     postcode: 87356
  //   },
  //   email: "julian.kohl@example.com",
  //   login: {
  //     username: "browndog589",
  //     password: "finish",
  //     salt: "BclbhNDG",
  //     md5: "f430331b5a0172280153c45e94d36782",
  //     sha1: "d4e3d6f2fdb275e5df4c1c7abe821b1b03ee3fee",
  //     sha256: "22d4d01aee50055c2e3acf5c5786c05b645f56680e84dcd5a20fc50c89d5f547"
  //   },
  //   dob: "1946-04-17 13:40:10",
  //   registered: "2008-08-14 21:32:15",
  //   phone: "0601-9171644",
  //   cell: "0174-3893722",
  //   id: {name: "", value: null},
  //   picture: {
  //     large: "https://randomuser.me/api/portraits/men/71.jpg",
  //     medium: "https://randomuser.me/api/portraits/med/men/71.jpg",
  //     thumbnail: "https://randomuser.me/api/portraits/thumb/men/71.jpg"
  //   },
  //   nat: "DE"
  // },
  // {
  //   gender: "male",
  //   name: { title: "mr", first: "demis", last: "de pagter"},
  //   location: {
  //     street: "6797 muhlenweg",
  //     city: "kleve",
  //     state: "bremen",
  //     postcode: 87356
  //   },
  //   email: "julian.kohl@example.com",
  //   login: {
  //     username: "browndog589",
  //     password: "finish",
  //     salt: "BclbhNDG",
  //     md5: "f430331b5a0172280153c45e94d36782",
  //     sha1: "d4e3d6f2fdb275e5df4c1c7abe821b1b03ee3fee",
  //     sha256: "22d4d01aee50055c2e3acf5c5786c05b645f56680e84dcd5a20fc50c89d5f547"
  //   },
  //   dob: "1946-04-17 13:40:10",
  //   registered: "2008-08-14 21:32:15",
  //   phone: "(548)-922-0740",
  //   cell: "0174-3893722",
  //   id: {name: "", value: null},
  //   picture: {
  //     large: "https://randomuser.me/api/portraits/men/95.jpg",
  //     medium: "https://randomuser.me/api/portraits/med/men/95.jpg",
  //     thumbnail: "https://randomuser.me/api/portraits/thumb/men/95.jpg"
  //   },
  //   nat: "DE"
  // },
  // {
  //   gender: "female",
  //   name: { title: "mrs", first: "jessica", last: "carpenter"},
  //   location: {
  //     street: "6797 muhlenweg",
  //     city: "kleve",
  //     state: "bremen",
  //     postcode: 87356
  //   },
  //   email: "julian.kohl@example.com",
  //   login: {
  //     username: "browndog589",
  //     password: "finish",
  //     salt: "BclbhNDG",
  //     md5: "f430331b5a0172280153c45e94d36782",
  //     sha1: "d4e3d6f2fdb275e5df4c1c7abe821b1b03ee3fee",
  //     sha256: "22d4d01aee50055c2e3acf5c5786c05b645f56680e84dcd5a20fc50c89d5f547"
  //   },
  //   dob: "1946-04-17 13:40:10",
  //   registered: "2008-08-14 21:32:15",
  //   phone: "013873 17904",
  //   cell: "0174-3893722",
  //   id: {name: "", value: null},
  //   picture: {
  //     large: "https://randomuser.me/api/portraits/women/33.jpg",
  //     medium: "https://randomuser.me/api/portraits/med/women/33.jpg",
  //     thumbnail: "https://randomuser.me/api/portraits/thumb/women/33.jpg"
  //   },
  //   nat: "GB"
  //   }
  // ]

  public reloadData = false;

  // testCheckboxOpen: boolean;
  // testCheckboxResult;

  constructor(public navCtrl: NavController, public service:PeopleProvider) { 
    this.service.getPeopleFromApi()
      .subscribe(
        (response) => {
          console.log(response);
          this.people = response["results"]
        },
        (error) => {
          console.log(error)
        }
      ) 
    }
    
    doRefresh(e) {
      this.service.getPeopleFromApi()
        .subscribe(
          (response) => {
            console.log(response);
            this.people = response["results"]
            e.complete()
          },
          (error) => {
            console.log(error)
            e.complete()
          }
        )
      }
  
    doInfinite(e) {
      this.service.getPeopleFromApi()
      .subscribe(
        data => this.people.push(...data["results"]),
        err => console.log(err),
        () => e.complete()
      )
    }

    toggleReloadData() {
      this.reloadData = !this.reloadData
    }
 
    pushPerson(user) {
      this.navCtrl.push(DetailContactPage,user)
    }

  // constructor(public alertCtrl: AlertController) { }

  // doCheckbox() {
  //   let alert = this.alertCtrl.create();
  //   alert.setTitle('Which planets have you visited?');

  //   alert.addInput({
  //     type: 'checkbox',
  //     label: 'Alderaan',
  //     value: 'value1',
  //     checked: true
  //   });

  //   alert.addInput({
  //     type: 'checkbox',
  //     label: 'Bespin',
  //     value: 'value2'
  //   });

  //   alert.addInput({
  //     type: 'checkbox',
  //     label: 'Coruscant',
  //     value: 'value3'
  //   });

  //   alert.addInput({
  //     type: 'checkbox',
  //     label: 'Endor',
  //     value: 'value4'
  //   });

  //   alert.addInput({
  //     type: 'checkbox',
  //     label: 'Hoth',
  //     value: 'value5'
  //   });

  //   alert.addInput({
  //     type: 'checkbox',
  //     label: 'Jakku',
  //     value: 'value6'
  //   });

  //   alert.addInput({
  //     type: 'checkbox',
  //     label: 'Naboo',
  //     value: 'value6'
  //   });

  //   alert.addInput({
  //     type: 'checkbox',
  //     label: 'Takodana',
  //     value: 'value6'
  //   });

  //   alert.addInput({
  //     type: 'checkbox',
  //     label: 'Tatooine',
  //     value: 'value6'
  //   });

  //   alert.addButton('Cancel');
  //   alert.addButton({
  //     text: 'Okay',
  //     handler: data => {
  //       console.log('Checkbox data:', data);
  //       this.testCheckboxOpen = false;
  //       this.testCheckboxResult = data;
  //     }
  //   });
  //   alert.present().then(() => {
  //     this.testCheckboxOpen = true;
  //   });
  // }
}
