<template>
<Page>
  <ActionBar title="Nuovo Sito">
    <NavigationButton text="Indietro" android.systemIcon="ic_menu_back" @tap="indietro"/>
    <ActionItem @tap="logOut" style="color:white" text="Logout" ></ActionItem> 
  </ActionBar>
  <GridLayout rows="*,70" backgroundColor="lightgray">
  <ScrollView row="0">
    <GridLayout rows="*,70" backgroundColor="lightgray">
    <FlexboxLayout flexDirection="column" width="100%" height="100%" >
      <Label :text="'Commodity - ' + selectedSito"/>
      
      <!-- Selected Gas -->
      <FlexboxLayout v-if="selectedSito == 'Gas'"  flexDirection="column" width="100%" height="100%">
      
      <Label v-if="contatoreRichiesta > 0" style="color: #BC1254" :text="'Errori: ('+contatoreRichiesta+'/1)'"></Label>
      <Button class="my-buttonAnagrafica" text="Tipologia Richiesta" width="100%" height="70" @tap="ToggleRichiesta()" />
        <FlexboxLayout v-show="RichiestaCheck" flexDirection="column" width="100%"  backgroundColor="lightgray">
          
          <!-- Tipologia Richiesta -->
          <StackLayout row="0" width:="80%">
          <!-- Tipologia Richiesta -->
          <Label text="Tipologia Richiesta" style="margin-top: 20px;"/>
          <Label class="select" :text="(selected.tipologiaRichieste!='') ? selected.tipologiaRichieste : 'Seleziona'" @tap="controllo('tipologiaRichieste')"/>
            <StackLayout class="hr-light">
              <Label  class="messageErrorUser">
                <FormattedString>
                  <Span :text="errorSelected.Richiestatipo" style="font-size:14px; color: #BC1254" />
                </FormattedString>
              </Label>
            </StackLayout>
          </StackLayout>
        </FlexboxLayout>

      <!-- Dati Tecnici -->
      <Label v-if="contatoreDatiTecnici > 0" style="color: #BC1254" :text="'Errori: ('+contatoreDatiTecnici+'/3)'"></Label>
      <Button class="my-buttonAnagrafica" text="Dati Tecnici" width="100%" height="70" @tap="ToggleDatiTecnici()" />
        <FlexboxLayout v-show="DatiTecniciCheck" flexDirection="column" width="100%"  backgroundColor="lightgray">

          <!-- PdP -->
            <StackLayout row="0" width:="80%">
            <Label class="textLabel">
              <FormattedString>
                <Span text="Punto Di Prelievo* :" style="font-size:14px; color:black"/>
              </FormattedString>
            </Label>
            <TextField keyboardType="number" v-model="DatiTecnici.PdP"  hint="Numero :"/>
            <StackLayout class="hr-light">
              <Label  class="messageErrorUser">
                <FormattedString>
                  <Span :text="errorDatiTecnici.PdP" style="font-size:14px; color: #BC1254" />
                </FormattedString>
              </Label>
            </StackLayout>
          </StackLayout>

          <!-- Consumo Presunto -->
            <StackLayout row="0" width:="80%">
            <Label class="textLabel">
              <FormattedString>
                <Span text="Consumo Presunto* :" style="font-size:14px; color:black"/>
              </FormattedString>
            </Label>
            <TextField keyboardType="number" v-model="DatiTecnici.ConsumoPresunto"  hint="Numero :"/>
            <StackLayout class="hr-light">
              <Label  class="messageErrorUser">
                <FormattedString>
                  <Span :text="errorDatiTecnici.ConsumoPresunto" style="font-size:14px; color: #BC1254" />
                </FormattedString>
              </Label>
            </StackLayout>
          </StackLayout>

          <!-- Categoria Uso -->
          <StackLayout row="0" width:="80%">
          <Label text="Categoria D'Uso" style="margin-top: 20px;"/>
          <Label class="select" :text="(selected.categoriaUso!='') ? selected.categoriaUso : 'Seleziona'" @tap="controllo('categoriaUso')"/>
            <StackLayout class="hr-light">
              <Label  class="messageErrorUser">
                <FormattedString>
                  <Span :text="errorSelected.categoriaUso" style="font-size:14px; color: #BC1254" />
                </FormattedString>
              </Label>
            </StackLayout>
          </StackLayout>
      
      </FlexboxLayout>
      
      <!-- Ubicazione Fornitura -->
      <Label v-show="contatoreResidenzaNew > 0" style="color: #BC1254"  :text="'Errori: ('+contatoreResidenzaNew+'/5)'"></Label>
      <Label v-show="contatoreResidenzaSelected > 0" style="color: #BC1254"  :text="'Errori: ('+contatoreResidenzaSelected+'/1)'"></Label>
      <!--<Label v-if="contatoreRichiesta > 0" style="color: #BC1254" :text="'Errori: ('+contatoreRichiesta+'/1)'"></Label>-->
      <Button class="my-buttonAnagrafica" text="Ubicazione Fornitura" width="100%" height="70" @tap="ToggleFornitura()" />
        <FlexboxLayout v-show="FornituraCheck" flexDirection="column" width="100%"  backgroundColor="lightgray">
          
          <!-- Tipologia Inserimento -->
          <StackLayout row="0" width:="80%">
          <Label text="Scegli Modalita: " style="margin-top: 20px;"/>
          <Label class="select" :text="(selected.typeIndirizzo!='') ? selected.typeIndirizzo : 'Seleziona'" @tap="controllo('typeIndirizzo')"/>
            <StackLayout class="hr-light">
              <Label  class="messageErrorUser">
                <FormattedString>
                  <Span :text="errorSelected.typeIndirizzo" style="font-size:14px; color: #BC1254" />
                </FormattedString>
              </Label>
            </StackLayout>
          </StackLayout>

          <FlexboxLayout v-show="selected.typeIndirizzo == 'Seleziona Indirizzo'" flexDirection="column" width="100%"  backgroundColor="lightgray">
          
          <!-- Tipologia Inserimento -->
          <StackLayout row="0" width:="80%">
          <Label text="Seleziona tra indirizzi esistenti" style="margin-top: 20px;"/>
          <Label class="select" :text="(selected.Indirizzi!='') ? selected.Indirizzi : 'Seleziona'" @tap="controllo('Indirizzi')"/>
            <StackLayout class="hr-light">
              <Label  class="messageErrorUser">
                <FormattedString>
                  <Span :text="errorSelected.Indirizzi" style="font-size:14px; color: #BC1254" />
                </FormattedString>
              </Label>
            </StackLayout>
          </StackLayout>
        </FlexboxLayout>
          
        <FlexboxLayout v-show="selected.typeIndirizzo == 'Nuovo Indirizzo'" flexDirection="column" width="100%"  backgroundColor="lightgray   ">
          <!-- Residenza -->
          <!-- Toponimo -->
            <StackLayout row="0" width:="80%">
            <Label class="textLabel">
              <FormattedString>
                <Span text="Toponimo* :" style="font-size:14px; color:black"/>
              </FormattedString>
            </Label>
            <TextField v-model="formFornitura.toponimo"  hint="Inserisci qui il Toponimo :"/>
            <StackLayout class="hr-light">
              <Label  class="messageErrorUser">
                <FormattedString>
                  <Span :text="errorformFornitura.toponimo" style="font-size:14px; color: #BC1254" />
                </FormattedString>
              </Label>
            </StackLayout>
          </StackLayout>

          <!-- Indirizzo -->
            <StackLayout row="1" width:="80%">
            <Label class="textLabel">
              <FormattedString>
                <Span text="Indirizzo* :" style="font-size:14px; color:black"/>
              </FormattedString>
            </Label>
            <TextField v-model="formFornitura.indirizzo"  hint="Inserisci qui il tuo indirizzo :"/>
            <StackLayout class="hr-light">
              <Label  class="messageErrorUser">
                <FormattedString>
                  <Span :text="errorformFornitura.indirizzo" style="font-size:14px; color: #BC1254" />
                </FormattedString>
              </Label>
            </StackLayout>
          </StackLayout>

          <!-- Civico -->
            <StackLayout row="2" width:="80%">
            <Label class="textLabel">
              <FormattedString>
                <Span text="Civico* :" style="font-size:14px; color:black"/>
              </FormattedString>
            </Label>
            <TextField keyboardType="number" v-model="formFornitura.civico"  hint="Inserisci qui il tuo Civico :"/>
            <StackLayout class="hr-light">
              <Label  class="messageErrorUser">
                <FormattedString>
                  <Span :text="errorformFornitura.civico" style="font-size:14px; color: #BC1254" />
                </FormattedString>
              </Label>
            </StackLayout>
          </StackLayout>

          <!-- Presso -->
            <StackLayout row="3" width:="80%">
            <Label class="textLabel">
              <FormattedString>
                <Span text="Presso :" style="font-size:14px; color:black"/>
              </FormattedString>
            </Label>
            <TextField v-model="formFornitura.presso"  hint="Inserisci qui il tuo Presso :"/>
            <StackLayout class="hr-light">
              <Label  class="messageErrorUser">
                <FormattedString>
                  <Span :text="errorformFornitura.presso" style="font-size:14px; color: #BC1254" />
                </FormattedString>
              </Label>
            </StackLayout>
          </StackLayout>

          <!-- Nazione -->
            <StackLayout row="4" width:="80%">
            <Label class="textLabel">
              <FormattedString>
                <Span text="Nazione* :" style="font-size:14px; color:black"/>
              </FormattedString>
            </Label>
            <TextField v-model="formFornitura.nazione"  hint="Inserisci qui la Nazione :"/>
            <StackLayout class="hr-light">
              <Label  class="messageErrorUser">
                <FormattedString>
                  <Span :text="errorformFornitura.nazione" style="font-size:14px; color: #BC1254" />
                </FormattedString>
              </Label>
            </StackLayout>
          </StackLayout>

          <!-- Localita -->
            <StackLayout row="5" width:="80%">
            <Label class="textLabel">
              <FormattedString>
                <Span text="Localita :" style="font-size:14px; color:black"/>
              </FormattedString>
            </Label>
            <TextField v-model="formFornitura.localita"  hint="Inserisci qui la Localita :"/>
            <StackLayout class="hr-light">
              <Label  class="messageErrorUser">
                <FormattedString>
                  <Span :text="errorformFornitura.localita" style="font-size:14px; color: #BC1254" />
                </FormattedString>
              </Label>
            </StackLayout>
          </StackLayout>

          <!-- Cap -->
            <StackLayout row="6" width:="80%">
            <Label class="textLabel">
              <FormattedString>
                <Span text="Cap* :" style="font-size:14px; color:black"/>
              </FormattedString>
            </Label>
            <TextField keyboardType="number" v-model="formFornitura.cap"  hint="Inserisci qui il Cap :"/>
            <StackLayout class="hr-light">
              <Label  class="messageErrorUser">
                <FormattedString>
                  <Span :text="errorformFornitura.cap" style="font-size:14px; color: #BC1254" />
                </FormattedString>
              </Label>
            </StackLayout>
          </StackLayout>

        </FlexboxLayout>
        
        <!-- Fine Residenza -->
        </FlexboxLayout>
  
    </FlexboxLayout>
    <!-- Fine Dati Anagrafici Persona Fisica -->

    </FlexboxLayout>
    </GridLayout>
  </ScrollView>
    <StackLayout row="1" orientation="horizontal">
      <Button class="my-button" width="100%" height="70" @tap="goTo" text="Avanti"></Button>
    </StackLayout>
  </GridLayout>
</Page>
</template>

<script >
    export default {
        computed:{
            selectedSito(){
                let get = this.$store.getters['Prospect/getContratto']
                return get.sitoListino
            } 
        },
        data(){
            return{
                contatoreResidenzaNew: 0,
                contatoreResidenzaSelected: 0,
                contatoreDatiTecnici: 0,
                DatiTecniciCheck: false,
                FornituraCheck: false,
                contatoreRichiesta: 0,
                RichiestaCheck : false,
                counterError: 0,
                //Finta Computed
                tipologiaRichieste: ['1', '2', '3', '4'],
                categoriaUso: ['1','2','3','4'],
                typeIndirizzo: ['Seleziona Indirizzo','Nuovo Indirizzo'],
                Indirizzi: ['via Luca', 'Via Pietro', 'Via Roma'],
                //Array Scelte Effettuate
                DatiTecnici: {
                  PdP: '',
                  ConsumoPresunto: '',
                },
                errorDatiTecnici: {
                  PdP: '',
                  ConsumoPresunto: '',
                },
                selected: {
                    tipologiaRichieste: '',
                    categoriaUso: '',
                    typeIndirizzo: 'Seleziona Indirizzo',
                    Indirizzi: '',
                },
                errorSelected:{
                    tipologiaRichieste: '',
                    categoriaUso: '',
                    typeIndirizzo: '',
                    Indirizzi: ''
                },
                formFornitura: {
                    toponimo: '',
                    indirizzo: '',
                    civico: '',
                    presso: '',
                    nazione: '',
                    localita: '',
                    cap: ''
                },
                errorformFornitura: {
                    toponimo: '',
                    indirizzo: '',
                    civico: '',
                    presso: '',
                    nazione: '',
                    localita: '',
                    cap: ''
                },
                }
        },
        methods: {
            ToggleFornitura(){
                this.FornituraCheck = !this.FornituraCheck
            },
            ToggleDatiTecnici(){
                this.DatiTecniciCheck = !this.DatiTecniciCheck
            },
            ToggleRichiesta(){
                this.RichiestaCheck = !this.RichiestaCheck
            },
            async controllo(option){
                await action('', '', this[option])
                    .then(res => {
                    this.selected[option] = res
                })
            },
            goTo(){
              this.contatoreRichiesta = 0,
              this.contatoreResidenza = 0,
              this.contatoreDatiTecnici = 0
              this.contatoreResidenzaSelected = 0,
              this.contatoreResidenzaNew = 0
              console.log("cisonoentrato")
              if(this.selectedSito == 'Gas'){
                for(let i in this.selected){
                  if(this.selected[i] == ''){
                    if(i == 'tipologiaRichieste') this.contatoreRichiesta ++
                    if(i == 'categoriaUso') this.contatoreDatiTecnici ++
                    if(i == 'Indirizzi') this.contatoreResidenzaSelected ++
                    this.errorSelected[i] = 'Errore sul campo'
                  }else{
                    this.errorSelected[i] = ''
                  }
                }
              }
              for(let i in this.DatiTecnici){
                  if(this.DatiTecnici[i] == ''){
                    this.errorDatiTecnici[i] = 'Errore sul campo'
                    this.contatoreDatiTecnici ++
                  }else{
                    this.errorDatiTecnici[i] = ''
                  }
                }
              if(this.selected.typeIndirizzo == 'Nuovo Indirizzo'){
                for(let i in this.formFornitura){
                  if(i == 'presso' || i == 'localita') continue 
                  if(this.formFornitura[i] == ''){
                    this.counterError ++
                    this.errorformFornitura[i] = 'Il campo è obbligatorio'
                    this.contatoreResidenzaNew ++
                  }else{
                    this.errorformFornitura[i] = ''
                }
              }
            }
            if(this.selected.typeIndirizzo == 'Seleziona Indirizzo') this.contatoreResidenzaNew = 0
            else this.contatoreResidenzaSelected = 0
              
            },
            indietro(){
                this.$navigateTo(this.$router.Contratto, {
                animated: true,
                transition: {
                    name: 'slideRight',
                    duration: 500,
                    curve: 'linear'
                }
                });
            },
            logOut(){
                this.$store.dispatch('Status/setStatus', '')
                this.$store.dispatch('Prospect/clearAll')
                this.$navigateTo(this.$router.Login , { clearHistory: true });
            }
        },
    }
</script>

<style scoped>
    ActionBar {
        background-color: #BC1254;
        color: #ffffff;
    }
  .my-button {
      background-color: #BC1254;
      color: white;
      width:85%;
      font-weight: bold;
      padding-top: 14;
      padding-bottom: 14;
      text-transform: uppercase;
      letter-spacing: 0.1;
      margin-bottom: 20;
      margin-top: 10;
    }
    .select{
    background-color:white;
    color: gray;
    border-radius:10;
    padding:10;
    margin-top: 5;
    margin-right:10;
    margin-left:10;
  }
  .my-buttonAnagrafica{
    background-color: #a85b75;
    color: white;
    width:75%;
    font-weight: bold;
    padding-top: 14;
    padding-bottom: 14;
    text-transform: uppercase;
    letter-spacing: 0.1;
    margin-bottom: 10;
    margin-top: 10;
  }
  .input-field{
      font-weight: bold;
      padding-top: 14;
      padding-bottom: 14;
      text-transform: uppercase;
      letter-spacing: 0.1;
      margin-bottom: 20;
      margin-top: 10;
  }
  TextField{
    background-color:white;
    border-radius:10;
    padding:10;
    margin-right:10;
    margin-left:10;
  }
  label{
    margin-right:10;
    margin-left:10;
    margin-top:10;
  }
  .select{
   background-color:white;
   color: gray;
   border-radius:10;
   padding:10;
   margin-top: 5;
   margin-right:10;
   margin-left:10;
 }
  .myButtonDisabled{
    background-color: #524b4d;
    color: white;
    width:75%;
    font-weight: bold;
    padding-top: 14;
    padding-bottom: 14;
    text-transform: uppercase;
    letter-spacing: 0.1;
    margin-bottom: 10;
    margin-top: 10;
  }
</style>