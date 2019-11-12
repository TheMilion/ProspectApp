<template>
<Page actionBarHidden="true">
  <ScrollView orientation="vertical">
  <Gradient direction="to top" colors="lightgray, lightgray">
        <FlexboxLayout class="page">
            <StackLayout class="form">
                <Image class="logo" src="~/images/logo.png"></Image>
                <GridLayout rows="auto, auto, auto">
                    <StackLayout row="0" class="input-field">
                       <Label class="textLabel">
                            <FormattedString>
                              <Span text="Username:" style="font-size:14px; color: #BC1254"/>
                            </FormattedString>
                        </Label>
                       <TextField   v-model="formLogin.username"  hint="Inserisci qui la tua Username"/>
                        <StackLayout class="hr-light">
                          <Label v-if="errorFormLogin.username" class="messageErrorUser">
                            <FormattedString>
                              <Span :text="errorFormLogin.username" style="font-size:14px; color: white" />
                            </FormattedString>
                          </Label>
                        </StackLayout>
                    </StackLayout>

                    <StackLayout row="1" class="input-field">
                      <Label class="textLabel">
                            <FormattedString>
                              <Span text="Password:" style="font-size:14px; color: #BC1254"/>
                            </FormattedString>
                        </Label>
                        <TextField  v-model="formLogin.password" :secure="showHidePass" hint="Inserisci qui la tua Password" />
                        <StackLayout class="hr-light">
                          <Label v-if="errorFormLogin.password" class="messageErrorPassword">
                            <FormattedString>
                              <Span :text="errorFormLogin.password" style="font-size:14px; color: white" />
                            </FormattedString>
                          </Label>
                        </StackLayout>
                    </StackLayout>
                </GridLayout>
               <Button class="my-button" text="Accedi" @tap="goto"></Button>
            </StackLayout>    
        </FlexboxLayout>
      </Gradient>
  </ScrollView>
    </Page>
</template>

<script >
  export default {
    data() {
      return {
        showHidePass: true,
        msg: 'Welcome EvaProspect',
        formLogin: {
          username : '',
          password: '' 
        },
        errorFormLogin: {
          username : '',
          password: '', 
        },
        counterError: 0
      }
    },
    methods: {
      showHidePassword(){
        this.showHidePass = !(this.showHidePass)
      },
      goto(){
        console.log("ci sono entrato prima")
        this.counterError = 0
        //Check Field
        for(let i in this.formLogin){
          if(this.formLogin[i] == ''){
            this.counterError ++
            this.errorFormLogin[i] = 'Errore sul campo '+ i
          }else{
            this.errorFormLogin[i] = ''
          }
      }
      if(this.counterError == 0){
          console.log("ci sono entrato")
          /*
        this.$axios.post('http://root-rkiv.localhost.run/', {
          headers: {
            "Content-Type" : "application/json"
          },
          body: {
              "username" : this.formLogin.username,
              "password" : this.formLogin.password
          }
        })
        .then(response => { 
          console.log("Response: " ,response)
        })
        .catch(error => {
            console.log("Error-Response" ,error)
        });

       this.$httpModule.request({
        url: 'https://root-rkiv.localhost.run/api/v1/auth/login',
        method: "post",
        headers: { "Content-Type": "application/json" },
        content: {
            username: this.formLogin.username,
            password: this.formLogin.username,
          }
      }).then((response) => {
        console.log("rispostaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa: " , response)
      }, (error) => {
       console.log("errore: " , error)
      });
            */
        this.$store.dispatch('Status/setStatus', {token: "ciaobello", refreshToken: "ciaoBello2"})
        this.$navigateTo(this.$router.Prospect , {
            clearHistory: true,
            animated: true,
            transition: {
              name: 'slideTop',
              duration: 500,
              curve: 'linear'
            }
            })
      }  
    }
  }
}
</script>

<style scoped>
    .page {
        align-items: center;
        flex-direction: column;
    }

    .form {
        margin-left: 30;
        margin-right: 30;
        flex-grow: 2;
        vertical-align: middle;
    }

    .logo {
        margin: 25;
        height: 90;
        font-weight: bold;
    }
    .input-field {
        margin-top:25;
        margin-bottom: 25;
    }


    .input:disabled {
        background-color: white;
        opacity: 0.5;
    }
    
    .my-button {
      background-color: #BC1254;
      color: white;
      font-weight: bold;
      border-radius: 25;
      padding-top: 14;
      padding-bottom: 14;
      text-transform: uppercase;
      letter-spacing: 0.1;
      margin-bottom: 20;
      margin-top: 10;
    }
</style>
