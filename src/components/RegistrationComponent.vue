<template>
    <v-card
      class="mx-auto"
      max-width="344"
    >
      <v-container>
          <v-form ref="myLoginForm" @submit.prevent="saveData()">
        
            <v-text-field
          v-model="userData.name"
          :rules="rules.name"
          color="primary"
          label="First name:"
        
        ></v-text-field>
        <v-text-field
          v-model="userData.email"
          :rules="rules.email"
          color="primary"
          label="Email:"
        
        ></v-text-field>
  
        <v-text-field
          v-model="userData.password"
          :rules="rules.password"
          color="primary"
          label="password:"
          placeholder="password:"
         
        ></v-text-field>
        <v-text-field
          v-model="userData.confirmpassword"
          :rules="rules.confirmpassword"
          color="primary"
          label="confirm password:"
          placeholder="confirm password:"
         
        ></v-text-field>
     
      <v-btn type="submit">
          submit
        </v-btn> </v-form>
      </v-container>
     
  </v-card>
  
  </template>
  <script>
    export default {
      data(){
        const that=this;
        return{
      userData: {
        name: '',
        password:'',
        confirmpassword:'',
        email:'',
      },
      rules: {
        name: [
          (value) => {
            if (value) return true
           return 'You must enter name.'
          },
          (value) => {
            if (value?.length>3) return true
           return 'short name.'                                                                                                                                                                                                                                                                                                                  
          },],
          email: [
          (value)=> {
              const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              return pattern.test(value) || 'Invalid e-mail.'
          },
          ],
          password:[ 
          (value) => {
            if(value && /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(value)) return true
            return 'Invalid password.'
        },
          ],
          confirmpassword:[
            (value)=>(!!value||"this is required"),
            function(value){
              if(value){
                console.log("here",that)
                if(value!=that.userData.password){
                  return'password mismatched'
                }else{
                  return false
                }
              }return false
            }
             ]
        },
      }},
      methods:{
          saveData(){
              const valid=this.$refs.myLoginForm.validate();
              console.log("enter valid output",valid);
              if(valid){
                  console.log('data sent',this.formFields);
              }
             return false
          },
      },
  };

  </script>
   