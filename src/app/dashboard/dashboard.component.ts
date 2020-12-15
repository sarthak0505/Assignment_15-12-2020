import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  phoneForm;
  phoneFormValues=['8687687678'];
  output3;
  constructor() {
    
    this.phoneForm = new FormGroup({
      phone_list:new FormArray([])
    })

    this.phoneForm.get('phone_list').push(new FormControl(this.phoneFormValues[0]));
    console.log("Form Value is ",this.phoneFormValues);
   }

  input_text="hvjhbjhb";
  output:number;
  error=false;

  ngOnInit(): void {
    console.log(this.phoneForm.get('phone_list').value);
  }

  handleClick(){
    this.error=false;
    let input_num= parseInt(this.input_text);
    if(typeof(input_num)!='number'){
      this.error=true;
      return;
    }
    if(input_num%2==1){
      this.output=(input_num * input_num)+1;
    }
    else{
      this.output=(input_num * input_num)-1; 
    }
  }

  addButton(){
    this.phoneFormValues.push('');
    this.phoneForm.get('phone_list').push(new FormControl(''));
  }

  deleteButton(ind){
    this.phoneFormValues.splice(ind,1);
    this.phoneForm.get('phone_list').removeAt(ind);
  }

  submitForm(){
    let nums = this.phoneForm.value['phone_list'];
    let output=[];
    nums.forEach((num,i)=>{
      let str=`phoneNumber${i+1}`;
      let obj={}
      obj[str]=num;
      output.push(obj);
    });
    console.log(output);
    this.output3=output;

  }

}
