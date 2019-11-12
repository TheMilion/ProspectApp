<template>
  <Page>
    <ActionBar title="Anagrafica">
      <NavigationButton text="Indietro" android.systemIcon="ic_menu_back" @tap="indietro"/>
      <ActionItem @tap="logOut" style="color:white" text="Logout" ></ActionItem> 
    </ActionBar>
<GridLayout rows="*,70" backgroundColor="lightgray">
    <ScrollView row="0">
      <GridLayout rows="*,70" backgroundColor="lightgray">
      <FlexboxLayout flexDirection="column" width="100%" height="100%" >
        
        <!-- Dati Anagrafici -->
        <Button class="my-buttonAnagrafica" text="Dati Anagrafici" width="100%" height="70" @tap="ToggleDatiAnagrafici()" />
          <FlexboxLayout v-if="AnagraficaCheck" flexDirection="column" width="100%" height="100%" backgroundColor="lightgray">
              <!-- Nome -->
              <StackLayout row="0" width:="80%">
              <Label class="textLabel">
                <FormattedString>
                  <Span text="Nome* :" style="font-size:14px; color: #BC1254"/>
                </FormattedString>
              </Label>
              <TextField v-model="formDatiAnagrafici.nome"  hint="Inserisci qui il tuo Nome:"/>
              <StackLayout class="hr-light">
                <Label  class="messageErrorUser">
                  <FormattedString>
                    <Span :text="errorformDatiAnagrafici.nome" style="font-size:14px; color: white" />
                  </FormattedString>
                </Label>
              </StackLayout>
            </StackLayout>

            <!-- Cognome -->
            <StackLayout row="1" width:="80%">
              <Label class="textLabel">
                <FormattedString>
                  <Span text="Cognome* :" style="font-size:14px; color: #BC1254"/>
                </FormattedString>
              </Label>
              <TextField v-model="formDatiAnagrafici.Cognome"  hint="Inserisci qui il tuo Cognome:"/>
              <StackLayout class="hr-light">
                <Label  class="messageErrorUser">
                  <FormattedString>
                    <Span :text="errorformDatiAnagrafici.cognome" style="font-size:14px; color: white" />
                  </FormattedString>
                </Label>
              </StackLayout>
            </StackLayout>

            <!--Codice Fiscale -->
            <StackLayout row="2" width:="80%">
              <Label class="textLabel">
                <FormattedString>
                  <Span text="Codice Fiscale* :" style="font-size:14px; color: #BC1254"/>
                </FormattedString>
              </Label>
              <TextField v-model="formDatiAnagrafici.codicefiscale"  hint="Inserisci qui il tuo Codice Fiscale:"/>
              <StackLayout class="hr-light">
                <Label  class="messageErrorUser">
                  <FormattedString>
                    <Span :text="errorformDatiAnagrafici.codicefiscale" style="font-size:14px; color: white" />
                  </FormattedString>
                </Label>
              </StackLayout>
            </StackLayout>

            <!--Nazione di  Nascita -->
            <StackLayout row="3" width:="80%">
              <Label class="textLabel">
                <FormattedString>
                  <Span text="Nazione di Nascita* :" style="font-size:14px; color: #BC1254"/>
                </FormattedString>
              </Label>
              <TextField v-model="formDatiAnagrafici.nazione"  hint="Inserisci qui la tua Nazione:"/>
              <StackLayout class="hr-light">
                <Label  class="messageErrorUser">
                  <FormattedString>
                    <Span :text="errorformDatiAnagrafici.nazione" style="font-size:14px; color: white" />
                  </FormattedString>
                </Label>
              </StackLayout>
            </StackLayout>

            <!--Luogo di  Nascita -->
            <StackLayout row="4" width:="80%">
              <Label class="textLabel">
                <FormattedString>
                  <Span text="Luogo di Nascita* :" style="font-size:14px; color: #BC1254"/>
                </FormattedString>
              </Label>
              <TextField v-model="formDatiAnagrafici.luogo"  hint="Inserisci qui il tuo luogo di nascita:"/>
              <StackLayout class="hr-light">
                <Label  class="messageErrorUser">
                  <FormattedString>
                    <Span :text="errorformDatiAnagrafici.luogo" style="font-size:14px; color: white" />
                  </FormattedString>
                </Label>
              </StackLayout>
            </StackLayout>

            <!--Data Di Nascita -->
            <StackLayout row="5" width:="80%">
              <Label class="textLabel">
                <FormattedString>
                  <Span text="Data Di Nascita* :" style="font-size:14px; color: #BC1254"/>
                </FormattedString>
              </Label>
              <DatePicker v-model="formDatiAnagrafici.datadinascita" />
              <label :text="formDatiAnagrafici.datadinascita" />
              <StackLayout class="hr-light">
                <Label  class="messageErrorUser">
                  <FormattedString>
                    <Span :text="errorformDatiAnagrafici.datadinascita" style="font-size:14px; color: white" />
                  </FormattedString>
                </Label>
              </StackLayout>
            </StackLayout>
          </FlexboxLayout>
        <!-- Fine Dati Anagrafici -->

        <!-- Recapiti -->
        <Button class="my-buttonAnagrafica" width="100%" height="70" @tap="ToggleRecapiti()" text="Recapiti"></Button>
          <FlexboxLayout v-if="RecapitiCheck" flexDirection="column" width="100%" height="100%" backgroundColor="lightgray">
           
            <!-- Telefono -->
              <StackLayout row="0" width:="80%">
              <Label class="textLabel">
                <FormattedString>
                  <Span text="Telefono* :" style="font-size:14px; color: #BC1254"/>
                </FormattedString>
              </Label>
              <TextField v-model="formRecapiti.telefono"  hint="Inserisci qui il tuo Telefono:"/>
              <StackLayout class="hr-light">
                <Label  class="messageErrorUser">
                  <FormattedString>
                    <Span :text="errorformRecapiti.telefono" style="font-size:14px; color: white" />
                  </FormattedString>
                </Label>
              </StackLayout>
            </StackLayout>

             <!-- Telefono Alternativo -->
              <StackLayout row="0" width:="80%">
              <Label class="textLabel">
                <FormattedString>
                  <Span text="Telefono Alternativo:" style="font-size:14px; color: #BC1254"/>
                </FormattedString>
              </Label>
              <TextField v-model="formRecapiti.telefonoalt"  hint="Inserisci qui il tuo Telefono Alt. :"/>
              <StackLayout class="hr-light">
                <Label  class="messageErrorUser">
                  <FormattedString>
                    <Span :text="errorformRecapiti.telefonoalt" style="font-size:14px; color: white" />
                  </FormattedString>
                </Label>
              </StackLayout>
            </StackLayout>

            <!-- Cellulare  -->
              <StackLayout row="0" width:="80%">
              <Label class="textLabel">
                <FormattedString>
                  <Span text="Cellulare :" style="font-size:14px; color: #BC1254"/>
                </FormattedString>
              </Label>
              <TextField v-model="formRecapiti.cellulare"  hint="Inserisci qui il tuo Cellulare:"/>
              <StackLayout class="hr-light">
                <Label  class="messageErrorUser">
                  <FormattedString>
                    <Span :text="errorformRecapiti.cellulare" style="font-size:14px; color: white" />
                  </FormattedString>
                </Label>
              </StackLayout>
            </StackLayout>

            <!-- Cellulare Alternativo -->
              <StackLayout row="0" width:="80%">
              <Label class="textLabel">
                <FormattedString>
                  <Span text="Cellulare Alternativo :" style="font-size:14px; color: #BC1254"/>
                </FormattedString>
              </Label>
              <TextField v-model="formRecapiti.cellularealt"  hint="Inserisci qui il tuo Cellulare Alt. :"/>
              <StackLayout class="hr-light">
                <Label  class="messageErrorUser">
                  <FormattedString>
                    <Span :text="errorformRecapiti.cellularealt" style="font-size:14px; color: white" />
                  </FormattedString>
                </Label>
              </StackLayout>
            </StackLayout>

            <!-- Fax -->
              <StackLayout row="0" width:="80%">
              <Label class="textLabel">
                <FormattedString>
                  <Span text="Fax :" style="font-size:14px; color: #BC1254"/>
                </FormattedString>
              </Label>
              <TextField v-model="formRecapiti.fax"  hint="Inserisci qui il tuo Cellulare Fax. :"/>
              <StackLayout class="hr-light">
                <Label  class="messageErrorUser">
                  <FormattedString>
                    <Span :text="errorformRecapiti.fax" style="font-size:14px; color: white" />
                  </FormattedString>
                </Label>
              </StackLayout>
            </StackLayout>

            <!-- Email -->
              <StackLayout row="0" width:="80%">
              <Label class="textLabel">
                <FormattedString>
                  <Span text="Email* :" style="font-size:14px; color: #BC1254"/>
                </FormattedString>
              </Label>
              <TextField v-model="formRecapiti.email"  hint="Inserisci qui la tua Email :"/>
              <StackLayout class="hr-light">
                <Label  class="messageErrorUser">
                  <FormattedString>
                    <Span :text="errorformRecapiti.email" style="font-size:14px; color: white" />
                  </FormattedString>
                </Label>
              </StackLayout>
            </StackLayout>

            <!-- Pec -->
              <StackLayout row="0" width:="80%">
              <Label class="textLabel">
                <FormattedString>
                  <Span text="Pec :" style="font-size:14px; color: #BC1254"/>
                </FormattedString>
              </Label>
              <TextField v-model="formRecapiti.pec"  hint="Inserisci qui il tuo Pec :"/>
              <StackLayout class="hr-light">
                <Label  class="messageErrorUser">
                  <FormattedString>
                    <Span :text="errorformRecapiti.pec" style="font-size:14px; color: white" />
                  </FormattedString>
                </Label>
              </StackLayout>
            </StackLayout>
        </FlexboxLayout>
        <!-- Fine Recapiti -->
        
        <!-- Residenza -->
        <Button class="my-buttonAnagrafica" width="100%" height="70" @tap="ToggleResidenza()" text="Residenza"></Button>
          <FlexboxLayout v-if="ResidenzaCheck" flexDirection="column" width="100%" height="100%" backgroundColor="lightgray">
            <Label text="Label 1" width="70" height="70" backgroundColor="red"/>
            <Label text="Label 2" width="70" height="70" backgroundColor="green"/>
            <Label text="Label 3" width="70" height="70" backgroundColor="blue"/>
            <Label text="Label 4" width="70" height="70" backgroundColor="yellow"/>
          </FlexboxLayout>
        <Button class="my-buttonAnagrafica" width="100%" height="70" @tap="ToggleDomiciliazioneDoc()" text="Domiciliazione Documenti"></Button>
          <FlexboxLayout v-if="DomiciliazioneDocCheck" flexDirection="column" width="100%" height="100%" backgroundColor="lightgray">
            <Label text="Label 1" width="70" height="70" backgroundColor="red"/>
            <Label text="Label 2" width="70" height="70" backgroundColor="green"/>
            <Label text="Label 3" width="70" height="70" backgroundColor="blue"/>
            <Label text="Label 4" width="70" height="70" backgroundColor="yellow"/>
          </FlexboxLayout>
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
    data() {
      return {
        AnagraficaCheck : false,
        RecapitiCheck : false,
        ResidenzaCheck: false,
        DomiciliazioneDocCheck: false,

        formDatiAnagrafici: {
          nome: '',
          cognome: '',
          codicefiscale: '',
          datadinascita: '',
          nazione: '',
          luogo: ''
        },
        errorformDatiAnagrafici: {
          nome: '',
          cognome: '',
          codicefiscale: '',
          datadinascita: '',
          nazione: '',
          luogo: ''
        },
        formRecapiti: {
          telefono: '',
          telefonoalt: '',
          cellulare: '',
          cellularealt: '',
          fax: '',
          email: '',
          pec: '',
        },
        errorformRecapiti: {
          telefono: '',
          telefonoalt: '',
          cellulare: '',
          cellularealt: '',
          fax: '',
          email: '',
          pec: '',
        },
        formResidenza: {
          toponimo: '',
          indirizzo: '',
          civico: '',
          presso: '',
          nazione: '',
          localita: '',
          cap: ''
        },
        formDomiciliazioneDoc: {
          toponimo: '',
          indirizzo: '',
          civico: '',
          presso: '',
          localita: '',
          cap: ''
        },
        formFatturaEmail: {
          email: ''
        }
      }
    },
    mounted(){},
    methods: {  
      ToggleDatiAnagrafici(){
          this.AnagraficaCheck = !this.AnagraficaCheck
      }, 
      ToggleRecapiti(){
        this.RecapitiCheck =  !this.RecapitiCheck
      },
      ToggleResidenza(){
        this.ResidenzaCheck = !this.ResidenzaCheck
      },
      ToggleDomiciliazioneDoc(){
        this.DomiciliazioneDocCheck = !this.DomiciliazioneDocCheck
      },
      goTo(){
        this.$navigateTo(this.$router.Contratto, {
          animated: true,
            transition: {
              name: 'fade',
              duration: 500,
              curve: 'linear'
            }
            });
      },   
      indietro(){
        this.$navigateTo(this.$router.Search, {
          animated: true,
          transition: {
            name: 'slideRight',
            duration: 500,
            curve: 'linear'
            }
            });
      },  
      logOut(){
        this.$store.dispatch('Status/setStatus', {})
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
  .my-buttonAnagrafica{
      background-color: black;
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
  .input-field{
      font-weight: bold;
      padding-top: 14;
      padding-bottom: 14;
      text-transform: uppercase;
      letter-spacing: 0.1;
      margin-bottom: 20;
      margin-top: 10;
  }
</style>