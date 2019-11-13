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
        <Label :text="'Hai Impostato una : ' + selectedPerson"/>
        <!-- Dati Anagrafici Persona Fisica -->

        <FlexboxLayout v-if="selectedPerson == 'Persona Fisica'"  flexDirection="column" width="100%" height="100%">
        <Label v-if="contatoreDatiAnagrafici > 0" style="color: #BC1254" :text="'Errori: ('+contatoreDatiAnagrafici+'/5)'"></Label>
        <Button class="my-buttonAnagrafica" text="Dati Anagrafici" width="100%" height="70" @tap="ToggleDatiAnagrafici()" />
          <FlexboxLayout v-show="AnagraficaCheck" flexDirection="column" width="100%"  backgroundColor="lightgray">
              <!-- Nome -->
              <StackLayout row="0" width:="80%">
              <Label class="textLabel">
                <FormattedString>
                  <Span text="Nome* :" style="font-size:14px; color:black"/>
                </FormattedString>
              </Label>
              <TextField v-model="formDatiAnagraficiPersonaFisica.nome"  hint="Inserisci qui il tuo Nome:"/>
              <StackLayout class="hr-light">
                <Label  class="messageErrorUser">
                  <FormattedString>
                    <Span :text="errorformDatiAnagraficiPersonaFisica.nome" style="font-size:14px; color: #BC1254" />
                  </FormattedString>
                </Label>
              </StackLayout>
            </StackLayout>

            <!-- Cognome -->
            <StackLayout row="1" width:="80%">
              <Label class="textLabel">
                <FormattedString>
                  <Span text="Cognome* :" style="font-size:14px; color:black"/>
                </FormattedString>
              </Label>
              <TextField v-model="formDatiAnagraficiPersonaFisica.cognome"  hint="Inserisci qui il tuo Cognome:"/>
              <StackLayout class="hr-light">
                <Label  class="messageErrorUser">
                  <FormattedString>
                    <Span :text="errorformDatiAnagraficiPersonaFisica.cognome" style="font-size:14px; color: #BC1254" />
                  </FormattedString>
                </Label>
              </StackLayout>
            </StackLayout>

            <!--Codice Fiscale -->
            <StackLayout row="2" width:="80%">
              <Label class="textLabel">
                <FormattedString>
                  <Span text="Codice Fiscale* :" style="font-size:14px; color:black"/>
                </FormattedString>
              </Label>
              <TextField textWrap = "true" editable= "false" v-model="formDatiAnagraficiPersonaFisica.codicefiscale"  hint="Inserisci qui il tuo Codice Fiscale:"/>
              <StackLayout class="hr-light">
                <Label  class="messageErrorUser">
                  <FormattedString>
                    <Span :text="errorformDatiAnagraficiPersonaFisica.codicefiscale" style="font-size:14px; color: #BC1254" />
                  </FormattedString>
                </Label>
              </StackLayout>
            </StackLayout>

            <!--Nazione di  Nascita -->
            <StackLayout row="3" width:="80%">
              <Label class="textLabel">
                <FormattedString>
                  <Span text="Nazione di Nascita* :" style="font-size:14px; color:black"/>
                </FormattedString>
              </Label>
              <TextField v-model="formDatiAnagraficiPersonaFisica.nazione"  hint="Inserisci qui la tua Nazione:"/>
              <StackLayout class="hr-light">
                <Label  class="messageErrorUser">
                  <FormattedString>
                    <Span :text="errorformDatiAnagraficiPersonaFisica.nazione" style="font-size:14px; color: #BC1254" />
                  </FormattedString>
                </Label>
              </StackLayout>
            </StackLayout>

            <!--Luogo di  Nascita -->
            <StackLayout row="4" width:="80%">
              <Label class="textLabel">
                <FormattedString>
                  <Span text="Luogo di Nascita* :" style="font-size:14px; color:black"/>
                </FormattedString>
              </Label>
              <TextField v-model="formDatiAnagraficiPersonaFisica.luogo"  hint="Inserisci qui il tuo luogo di nascita:"/>
              <StackLayout class="hr-light">
                <Label  class="messageErrorUser">
                  <FormattedString>
                    <Span :text="errorformDatiAnagraficiPersonaFisica.luogo" style="font-size:14px; color: #BC1254" />
                  </FormattedString>
                </Label>
              </StackLayout>
            </StackLayout>

            <!--Data Di Nascita -->
            <StackLayout row="5" width:="80%">
              <Label class="textLabel">
                <FormattedString>
                  <Span text="Data Di Nascita* :" style="font-size:14px; color:black"/>
                </FormattedString>
              </Label>
              <DatePickerField class="select" hint="DD MM YYYY" minDate="1900/01/01" @dateChange="(args)=>{formDatiAnagraficiPersonaFisica.datadinascita = args.value}" :date="(formDatiAnagraficiPersonaFisica.datadinascita=='') ? null : formDatiAnagraficiPersonaFisica.datadinascita"/>
               <StackLayout class="hr-light">
                <Label  class="messageErrorUser">
                  <FormattedString>
                    <Span :text="errorformDatiAnagraficiPersonaFisica.datadinascita" style="font-size:14px; color: #BC1254" />
                  </FormattedString>
                </Label>
              </StackLayout>
            </StackLayout>
          </FlexboxLayout>
          </FlexboxLayout>

          <FlexboxLayout v-else flexDirection="column" width="100%" height="100%">
            <Label v-if="contatoreDatiAnagraficiGiuridica > 0" style="color: #BC1254" :text="'Errori: ('+contatoreDatiAnagraficiGiuridica+'/1)'"></Label>
            <Button class="my-buttonAnagrafica" text="Dati Anagrafici" width="100%" height="70" @tap="ToggleDatiAnagraficiGiuridica()" />
            <FlexBoxLayout v-show="AnagraficaCheckGiuridica" flexDirection="column" width="100%" backgroundColor="lightgray">
              <!-- Ragione Sociale -->
              <StackLayout row="0" width:="80%">
              <Label class="textLabel">
                <FormattedString>
                  <Span text="Ragione Sociale* :" style="font-size:14px; color:black"/>
                </FormattedString>
              </Label>
              <TextField v-model="formDatiAnagraficiPersonaGiuridica.ragionesociale"  hint="Inserisci qui la Ragione Sociale:"/>
              <StackLayout class="hr-light">
                <Label  class="messageErrorUser">
                  <FormattedString>
                    <Span :text="errorformDatiAnagraficiPersonaGiuridica.ragionesociale" style="font-size:14px; color: #BC1254" />
                  </FormattedString>
                </Label>
              </StackLayout>
            </StackLayout>

            <!-- Partita Iva -->
              <StackLayout row="0" width:="80%">
              <Label class="textLabel">
                <FormattedString>
                  <Span text="Partita Iva* :" style="font-size:14px; color:black"/>
                </FormattedString>
              </Label>
              <TextField  textWrap = "true" editable= "false" v-model="formDatiAnagraficiPersonaGiuridica.piva"  hint="Inserisci qui la Partita Iva:"/>
              <StackLayout class="hr-light">
                <Label  class="messageErrorUser">
                  <FormattedString>
                    <Span :text="errorformDatiAnagraficiPersonaGiuridica.piva" style="font-size:14px; color: #BC1254" />
                  </FormattedString>
                </Label>
              </StackLayout>
            </StackLayout>

            <!-- Codice Fiscale -->
              <StackLayout row="0" width:="80%">
              <Label class="textLabel">
                <FormattedString>
                  <Span text="Codice Fiscale* :" style="font-size:14px; color:black"/>
                </FormattedString>
              </Label>
              <TextField textWrap = "true" editable= "false" v-model="formDatiAnagraficiPersonaGiuridica.codicefiscale"  hint="Inserisci qui il Codice Fiscale:"/>
              <StackLayout class="hr-light">
                <Label  class="messageErrorUser">
                  <FormattedString>
                    <Span :text="errorformDatiAnagraficiPersonaGiuridica.codicefiscale" style="font-size:14px; color: #BC1254" />
                  </FormattedString>
                </Label>
              </StackLayout>
            </StackLayout>
          </FlexboxLayout>

        <!-- Rappresentante -->
        <Label v-if="contatoreRappresentate > 0" style="color: #BC1254"  :text="'Errori: ('+contatoreRappresentate+'/8)'"></Label>
        <Button class="my-buttonAnagrafica" width="100%" height="70" @tap="ToggleRappresentante()" text="Rappresentante Legale"></Button>
          <FlexboxLayout v-show="RappresentanteCheck" flexDirection="column" width="100%" backgroundColor="lightgray">
            
            <!-- Nome -->
              <StackLayout row="0" width:="80%">
              <Label class="textLabel">
                <FormattedString>
                  <Span text="Nome* :" style="font-size:14px; color:black"/>
                </FormattedString>
              </Label>
              <TextField v-model="formRappresentantePersonaGiuridica.nome"  hint="Inserisci qui il Nome:"/>
              <StackLayout class="hr-light">
                <Label  class="messageErrorUser">
                  <FormattedString>
                    <Span :text="errorformRappresentantePersonaGiuridica.nome" style="font-size:14px; color: #BC1254" />
                  </FormattedString>
                </Label>
              </StackLayout>
            </StackLayout>

            <!-- Cognome -->
              <StackLayout row="0" width:="80%">
              <Label class="textLabel">
                <FormattedString>
                  <Span text="Cognome* :" style="font-size:14px; color:black"/>
                </FormattedString>
              </Label>
              <TextField v-model="formRappresentantePersonaGiuridica.cognome"  hint="Inserisci qui il Cognome:"/>
              <StackLayout class="hr-light">
                <Label  class="messageErrorUser">
                  <FormattedString>
                    <Span :text="errorformRappresentantePersonaGiuridica.cognome" style="font-size:14px; color: #BC1254" />
                  </FormattedString>
                </Label>
              </StackLayout>
            </StackLayout>

            <!-- Codice Fiscale -->
              <StackLayout row="0" width:="80%">
              <Label class="textLabel">
                <FormattedString>
                  <Span text="Codice Fiscale* :" style="font-size:14px; color:black"/>
                </FormattedString>
              </Label>
              <TextField v-model="formRappresentantePersonaGiuridica.codicefiscale"  hint="Inserisci qui il Codice Fiscale:"/>
              <StackLayout class="hr-light">
                <Label  class="messageErrorUser">
                  <FormattedString>
                    <Span :text="errorformRappresentantePersonaGiuridica.codicefiscale" style="font-size:14px; color: #BC1254" />
                  </FormattedString>
                </Label>
              </StackLayout>
            </StackLayout>

            <!-- Tipologia Documento -->
              <StackLayout row="0" width:="80%">
              <Label class="textLabel">
                <FormattedString>
                  <Span text="Tipologia Documento* :" style="font-size:14px; color:black"/>
                </FormattedString>
              </Label>
              <TextField v-model="formRappresentantePersonaGiuridica.tipologiadocumento"  hint="Inserisci qui il Tipologia Documento:"/>
              <StackLayout class="hr-light">
                <Label  class="messageErrorUser">
                  <FormattedString>
                    <Span :text="errorformRappresentantePersonaGiuridica.tipologiadocumento" style="font-size:14px; color: #BC1254" />
                  </FormattedString>
                </Label>
              </StackLayout>
            </StackLayout>

            <!-- Numero Documento -->
              <StackLayout row="0" width:="80%">
              <Label class="textLabel">
                <FormattedString>
                  <Span text="Numero Documento* :" style="font-size:14px; color:black"/>
                </FormattedString>
              </Label>
              <TextField v-model="formRappresentantePersonaGiuridica.numerodocumento"  hint="Inserisci qui il Numero Documento:"/>
              <StackLayout class="hr-light">
                <Label  class="messageErrorUser">
                  <FormattedString>
                    <Span :text="errorformRappresentantePersonaGiuridica.numerodocumento" style="font-size:14px; color: #BC1254" />
                  </FormattedString>
                </Label>
              </StackLayout>
            </StackLayout>

            <!-- Rilasciato Da -->
              <StackLayout row="0" width:="80%">
              <Label class="textLabel">
                <FormattedString>
                  <Span text="Rilasciato Da* :" style="font-size:14px; color:black"/>
                </FormattedString>
              </Label>
              <TextField v-model="formRappresentantePersonaGiuridica.rilasciatoda"  hint="Inserisci qui da chi è Rilasciato:"/>
              <StackLayout class="hr-light">
                <Label  class="messageErrorUser">
                  <FormattedString>
                    <Span :text="errorformRappresentantePersonaGiuridica.rilasciatoda" style="font-size:14px; color: #BC1254" />
                  </FormattedString>
                </Label>
              </StackLayout>
            </StackLayout>

            <!-- Data di Rilascio -->
              <StackLayout row="0" width:="80%">
              <Label class="textLabel">
                <FormattedString>
                  <Span text="Data di Rilascio* :" style="font-size:14px; color:black"/>
                </FormattedString>
              </Label>
              <DatePickerField class="select" hint="DD MM YYYY" minDate="1990/01/01" @dateChange="(args)=>{formRappresentantePersonaGiuridica.datarilascio = args.value}" :date="(formRappresentantePersonaGiuridica.datarilascio=='') ? null : formRappresentantePersonaGiuridica.datarilascio"/>
              <StackLayout class="hr-light">
                <Label  class="messageErrorUser">
                  <FormattedString>
                    <Span :text="errorformRappresentantePersonaGiuridica.datarilascio" style="font-size:14px; color: #BC1254" />
                  </FormattedString>
                </Label>
              </StackLayout>
            </StackLayout>

            <!-- Data di Scadenza -->
              <StackLayout row="0" width:="80%">
              <Label class="textLabel">
                <FormattedString>
                  <Span text="Data di scadenza* :" style="font-size:14px; color:black"/>
                </FormattedString>
              </Label>
               <DatePickerField class="select" hint="DD MM YYYY" minDate="1990/01/01" @dateChange="(args)=>{formRappresentantePersonaGiuridica.datascadenza = args.value}" :date="(formRappresentantePersonaGiuridica.datascadenza=='') ? null : formRappresentantePersonaGiuridica.datascadenza"/>
             
              <StackLayout class="hr-light">
                <Label  class="messageErrorUser">
                  <FormattedString>
                    <Span :text="errorformRappresentantePersonaGiuridica.datascadenza" style="font-size:14px; color: #BC1254" />
                  </FormattedString>
                </Label>
              </StackLayout>
            </StackLayout>

          </FlexboxLayout>
           <!-- Fine Legale -->

        </FlexboxLayout>
        <!-- Fine Dati Anagrafici -->

        
       


        <!-- Recapiti -->
        <Label v-if="contatoreRecapiti > 0" style="color: #BC1254"  :text="'Errori: ('+contatoreRecapiti+'/2)'"></Label>
        <Button class="my-buttonAnagrafica" width="100%" height="70" @tap="ToggleRecapiti()" text="Recapiti"></Button>
          <FlexboxLayout v-show="RecapitiCheck" flexDirection="column" width="100%" height="100%" backgroundColor="lightgray">
           
            <!-- Telefono -->
              <StackLayout row="0" width:="80%">
              <Label class="textLabel">
                <FormattedString>
                  <Span text="Telefono* :" style="font-size:14px; color:black"/>
                </FormattedString>
              </Label>
              <TextField keyboardType="number" v-model="formRecapiti.telefono"  hint="Inserisci qui il tuo Telefono:"/>
              <StackLayout class="hr-light">
                <Label  class="messageErrorUser">
                  <FormattedString>
                    <Span :text="errorformRecapiti.telefono" style="font-size:14px; color: #BC1254" />
                  </FormattedString>
                </Label>
              </StackLayout>
            </StackLayout>

             <!-- Telefono Alternativo -->
              <StackLayout row="1" width:="80%">
              <Label class="textLabel">
                <FormattedString>
                  <Span text="Telefono Alternativo:" style="font-size:14px; color:black"/>
                </FormattedString>
              </Label>
              <TextField keyboardType="number" v-model="formRecapiti.telefonoalt"  hint="Inserisci qui il tuo Telefono Alt. :"/>
              <StackLayout class="hr-light">
                <Label  class="messageErrorUser">
                  <FormattedString>
                    <Span :text="errorformRecapiti.telefonoalt" style="font-size:14px; color: #BC1254" />
                  </FormattedString>
                </Label>
              </StackLayout>
            </StackLayout>

            <!-- Cellulare  -->
              <StackLayout row="2" width:="80%">
              <Label class="textLabel">
                <FormattedString>
                  <Span text="Cellulare :" style="font-size:14px; color:black"/>
                </FormattedString>
              </Label>
              <TextField  keyboardType="number" v-model="formRecapiti.cellulare"  hint="Inserisci qui il tuo Cellulare:"/>
              <StackLayout class="hr-light">
                <Label  class="messageErrorUser">
                  <FormattedString>
                    <Span :text="errorformRecapiti.cellulare" style="font-size:14px; color: #BC1254" />
                  </FormattedString>
                </Label>
              </StackLayout>
            </StackLayout>

            <!-- Cellulare Alternativo -->
              <StackLayout row="3" width:="80%">
              <Label class="textLabel">
                <FormattedString>
                  <Span text="Cellulare Alternativo :" style="font-size:14px; color:black"/>
                </FormattedString>
              </Label>
              <TextField keyboardType="number" v-model="formRecapiti.cellularealt"  hint="Inserisci qui il tuo Cellulare Alt. :"/>
              <StackLayout class="hr-light">
                <Label  class="messageErrorUser">
                  <FormattedString>
                    <Span :text="errorformRecapiti.cellularealt" style="font-size:14px; color: #BC1254" />
                  </FormattedString>
                </Label>
              </StackLayout>
            </StackLayout>

            <!-- Fax -->
              <StackLayout row="4" width:="80%">
              <Label class="textLabel">
                <FormattedString>
                  <Span text="Fax :" style="font-size:14px; color:black"/>
                </FormattedString>
              </Label>
              <TextField v-model="formRecapiti.fax"  hint="Inserisci qui il tuo Cellulare Fax. :"/>
              <StackLayout class="hr-light">
                <Label  class="messageErrorUser">
                  <FormattedString>
                    <Span :text="errorformRecapiti.fax" style="font-size:14px; color: #BC1254" />
                  </FormattedString>
                </Label>
              </StackLayout>
            </StackLayout>

            <!-- Email -->
              <StackLayout row="5" width:="80%">
              <Label class="textLabel">
                <FormattedString>
                  <Span text="Email* :" style="font-size:14px; color:black"/>
                </FormattedString>
              </Label>
              <TextField v-model="formRecapiti.email"  hint="Inserisci qui la tua Email :"/>
              <StackLayout class="hr-light">
                <Label  class="messageErrorUser">
                  <FormattedString>
                    <Span :text="errorformRecapiti.email" style="font-size:14px; color: #BC1254" />
                  </FormattedString>
                </Label>
              </StackLayout>
            </StackLayout>

            <!-- Pec -->
              <StackLayout row="6" width:="80%">
              <Label class="textLabel">
                <FormattedString>
                  <Span text="Pec :" style="font-size:14px; color:black"/>
                </FormattedString>
              </Label>
              <TextField v-model="formRecapiti.pec"  hint="Inserisci qui il tuo Pec :"/>
              <StackLayout class="hr-light">
                <Label  class="messageErrorUser">
                  <FormattedString>
                    <Span :text="errorformRecapiti.pec" style="font-size:14px; color: #BC1254" />
                  </FormattedString>
                </Label>
              </StackLayout>
            </StackLayout>

        </FlexboxLayout>
        <!-- Fine Recapiti -->
        
        <!-- Residenza -->
        <Label v-if="contatoreResidenza > 0" style="color: #BC1254"  :text="'Errori: ('+contatoreResidenza+'/5)'"></Label>
        <Button class="my-buttonAnagrafica" width="100%" height="70" v-if="selectedPerson == 'Persona Fisica'" @tap="ToggleResidenza()" text="Residenza"></Button>
        <Button class="my-buttonAnagrafica" width="100%" height="70" v-else @tap="ToggleResidenza()" text="Sede Legale"></Button>
          <FlexboxLayout v-show="ResidenzaCheck" flexDirection="column" width="100%" height="100%" backgroundColor="lightgray">
            
            <!-- Toponimo -->
              <StackLayout row="0" width:="80%">
              <Label class="textLabel">
                <FormattedString>
                  <Span text="Toponimo* :" style="font-size:14px; color:black"/>
                </FormattedString>
              </Label>
              <TextField v-model="formResidenza.toponimo"  hint="Inserisci qui il Toponimo :"/>
              <StackLayout class="hr-light">
                <Label  class="messageErrorUser">
                  <FormattedString>
                    <Span :text="errorformResidenza.toponimo" style="font-size:14px; color: #BC1254" />
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
              <TextField v-model="formResidenza.indirizzo"  hint="Inserisci qui il tuo indirizzo :"/>
              <StackLayout class="hr-light">
                <Label  class="messageErrorUser">
                  <FormattedString>
                    <Span :text="errorformResidenza.indirizzo" style="font-size:14px; color: #BC1254" />
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
              <TextField keyboardType="number" v-model="formResidenza.civico"  hint="Inserisci qui il tuo Civico :"/>
              <StackLayout class="hr-light">
                <Label  class="messageErrorUser">
                  <FormattedString>
                    <Span :text="errorformResidenza.civico" style="font-size:14px; color: #BC1254" />
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
              <TextField v-model="formResidenza.presso"  hint="Inserisci qui il tuo Presso :"/>
              <StackLayout class="hr-light">
                <Label  class="messageErrorUser">
                  <FormattedString>
                    <Span :text="errorformResidenza.presso" style="font-size:14px; color: #BC1254" />
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
              <TextField v-model="formResidenza.nazione"  hint="Inserisci qui la Nazione :"/>
              <StackLayout class="hr-light">
                <Label  class="messageErrorUser">
                  <FormattedString>
                    <Span :text="errorformResidenza.nazione" style="font-size:14px; color: #BC1254" />
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
              <TextField v-model="formResidenza.localita"  hint="Inserisci qui la Localita :"/>
              <StackLayout class="hr-light">
                <Label  class="messageErrorUser">
                  <FormattedString>
                    <Span :text="errorformResidenza.localita" style="font-size:14px; color: #BC1254" />
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
              <TextField keyboardType="number" v-model="formResidenza.cap"  hint="Inserisci qui il Cap :"/>
              <StackLayout class="hr-light">
                <Label  class="messageErrorUser">
                  <FormattedString>
                    <Span :text="errorformResidenza.cap" style="font-size:14px; color: #BC1254" />
                  </FormattedString>
                </Label>
              </StackLayout>
            </StackLayout>

          </FlexboxLayout>
          
          <!-- Fine Residenza -->

          <!-- Domiciliazione Documenti -->
          <Label v-show="contatoreDomiciliazione > 0" style="color: #BC1254"  :text="'Errori: ('+contatoreDomiciliazione+'/4)'"></Label>
          <WrapLayout orientation="horizontal" width="100%" height="70" backgroundColor="lightgray">
            <Button :class="(btnDomiciliazioneEnabled)? 'my-buttonAnagrafica' : 'myButtonDisabled' " :isEnabled ="btnDomiciliazioneEnabled" width="92%" height="70" @tap="ToggleDomiciliazioneDoc()" text="Domiciliazione Documenti"></Button>
            <Button backgroundColor="green" width="8%" height="70" v-if="btnDomiciliazioneEnabled" @tap="DisableDomiciliazione()" ></Button>
            <Button backgroundColor="#BC1254" width="8%" height="70" v-else @tap="ActiveDomiciliazione()" ></Button>
          </WrapLayout>
           <FlexboxLayout v-show="DomiciliazioneDocCheck" flexDirection="column" width="100%" height="100%" backgroundColor="lightgray">
            
          <!-- Toponimo -->
              <StackLayout row="0" width:="80%">
              <Label class="textLabel">
                <FormattedString>
                  <Span text="Toponimo* :" style="font-size:14px; color:black"/>
                </FormattedString>
              </Label>
              <TextField v-model="formDomiciliazioneDoc.toponimo"  hint="Inserisci qui il Toponimo :"/>
              <StackLayout class="hr-light">
                <Label  class="messageErrorUser">
                  <FormattedString>
                    <Span :text="errorformDomiciliazioneDoc.toponimo" style="font-size:14px; color: #BC1254" />
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
              <TextField v-model="formDomiciliazioneDoc.indirizzo"  hint="Inserisci qui il tuo indirizzo :"/>
              <StackLayout class="hr-light">
                <Label  class="messageErrorUser">
                  <FormattedString>
                    <Span :text="errorformDomiciliazioneDoc.indirizzo" style="font-size:14px; color: #BC1254" />
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
              <TextField keyboardType="number" v-model="formDomiciliazioneDoc.civico"  hint="Inserisci qui il tuo Civico :"/>
              <StackLayout class="hr-light">
                <Label  class="messageErrorUser">
                  <FormattedString>
                    <Span :text="errorformDomiciliazioneDoc.civico" style="font-size:14px; color: #BC1254" />
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
              <TextField v-model="formDomiciliazioneDoc.presso"  hint="Inserisci qui il tuo Presso :"/>
              <StackLayout class="hr-light">
                <Label  class="messageErrorUser">
                  <FormattedString>
                    <Span :text="errorformDomiciliazioneDoc.presso" style="font-size:14px; color: #BC1254" />
                  </FormattedString>
                </Label>
              </StackLayout>
            </StackLayout>

            <!-- Localita -->
              <StackLayout row="5" width:="80%">
              <Label class="textLabel">
                <FormattedString>
                  <Span text="Localita* :" style="font-size:14px; color:black"/>
                </FormattedString>
              </Label>
              <TextField v-model="formDomiciliazioneDoc.localita"  hint="Inserisci qui la Localita :"/>
              <StackLayout class="hr-light">
                <Label  class="messageErrorUser">
                  <FormattedString>
                    <Span :text="errorformDomiciliazioneDoc.localita" style="font-size:14px; color: #BC1254" />
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
              <TextField keyboardType="number" v-model="formDomiciliazioneDoc.cap"  hint="Inserisci qui il Cap :"/>
              <StackLayout class="hr-light">
                <Label  class="messageErrorUser">
                  <FormattedString>
                    <Span :text="errorformDomiciliazioneDoc.cap" style="font-size:14px; color: #BC1254" />
                  </FormattedString>
                </Label>
              </StackLayout>
            </StackLayout>
          
          </FlexboxLayout>
          <!-- Fine Domiciliazione Documenti -->

        <!-- Fattura Email -->
        <Label v-show="contatoreFatturaEmail > 0" style="color: #BC1254"  :text="'Errori: ('+contatoreFatturaEmail+'/1)'"></Label>
         
         <WrapLayout orientation="horizontal" width="100%" height="70" backgroundColor="lightgray">
         <Button :class="(btnFatturaEmail)? 'my-buttonAnagrafica' : 'myButtonDisabled' " :isEnabled ="btnFatturaEmail" width="92%" height="70" @tap="ToggleFatturaEmail()" text="Fattura Per Email"></Button>
         <Button backgroundColor="green" width="8%" height="70" v-if="btnFatturaEmail" @tap="DisableFattura()" ></Button>
         <Button backgroundColor="#BC1254" width="8%" height="70" v-else @tap="ActiveFattura()" >
         </Button>
         </WrapLayout>
         
         <FlexboxLayout v-show="FatturaEmailCheck" flexDirection="column" width="100%" height="100%" backgroundColor="lightgray">
            
          <!-- Email -->
              <StackLayout row="0" width:="80%">
              <Label class="textLabel">
                <FormattedString>
                  <Span text="Email* :" style="font-size:14px; color:black"/>
                </FormattedString>
              </Label>
              <TextField v-model="formFatturaEmail.email"  hint="Inserisci qui la Email :"/>
              <StackLayout class="hr-light">
                <Label  class="messageErrorUser">
                  <FormattedString>
                    <Span :text="errorformFatturaEmail.email" style="font-size:14px; color: #BC1254" />
                  </FormattedString>
                </Label>
              </StackLayout>
            </StackLayout>
          
          </FlexboxLayout>
          <!-- Fine Fattura Email -->

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
          formDatiAnagraficiPersonaFisica: {
            nome: '',
            cognome: '',
            codicefiscale: '',
            datadinascita: null,
            nazione: '',
            luogo: ''
          },
          errorformDatiAnagraficiPersonaFisica: {
            nome: '',
            cognome: '',
            codicefiscale: '',
            datadinascita: '',
            nazione: '',
            luogo: ''
        },

        formDatiAnagraficiPersonaGiuridica: {
            ragionesociale: '',
            piva: '',
            codicefiscale: ''
          },
          errorformDatiAnagraficiPersonaGiuridica: {
            ragionesociale: '',
            piva: '',
            codicefiscale: ''
        },

        formRappresentantePersonaGiuridica: {
            nome: '',
            cognome: '',
            codicefiscale: '',
            tipologiadocumento: '',
            numerodocumento: '',
            rilasciatoda: '',
            datarilascio: null,
            datascadenza: null
          },
          errorformRappresentantePersonaGiuridica: {
            nome: '',
            cognome: '',
            codicefiscale: '',
            tipologiadocumento: '',
            numerodocumento: '',
            rilasciatoda: '',
            datarilascio: '',
            datascadenza: ''
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
        errorformResidenza: {
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
        errorformDomiciliazioneDoc: {
          toponimo: '',
          indirizzo: '',
          civico: '',
          presso: '',
          localita: '',
          cap: ''
        },
        formFatturaEmail: {
          email: ''
        },
        errorformFatturaEmail: {
          email: ''
        },
      counterError: 0,
      contatoreDatiAnagrafici: 0,
      contatoreDatiAnagraficiGiuridica: 0,
      contatoreRappresentate: 0,
      contatoreRecapiti: 0,
      contatoreResidenza: 0,
      contatoreDomiciliazione: 0,
      contatoreFatturaEmail: 0,
      btnDomiciliazioneEnabled: false,      
      btnFatturaEmail: false,
      AnagraficaCheck : true,
      AnagraficaCheckGiuridica : true,
      RappresentanteCheck: false,
      RecapitiCheck : false,
      ResidenzaCheck: false,
      DomiciliazioneDocCheck: false,
      FatturaEmailCheck: false,
      selectedPerson: '',
      selectedSearch: ''
      }
      
    },
    mounted(){
      var search = this.$store.getters['Prospect/getSearch']
      this.selectedPerson = search.tipoPersona
      
      if(this.selectedPerson == 'Persona Fisica') {
        this.selectedSearch = search.codiceFiscale
        this.formDatiAnagraficiPersonaFisica.codicefiscale = this.selectedSearch
        if(Object.keys(this.$store.getters['Prospect/getAnagrafica']).length != 0){
          let get = this.$store.getters['Prospect/getAnagrafica']
          this.formDatiAnagraficiPersonaFisica = {...get.datiAnagrafici},
          this.formRecapiti = {...get.recapiti},
          this.formResidenza = {...get.residenza},
          this.formDomiciliazioneDoc = {...get.domiciliazione},
          this.formFatturaEmail = {...get.fatturaEmail}
          if(Object.keys(this.formDomiciliazioneDoc).length != 0) this.btnDomiciliazioneEnabled = true
          if(Object.keys(this.formFatturaEmail).length != 0)  this.btnFatturaEmail = true
        }
      }
      else{
        this.selectedSearch = search.partitaIva
        if(this.selectedSearch.length == 11) this.formDatiAnagraficiPersonaGiuridica.codicefiscale = this.selectedSearch
        else this.formDatiAnagraficiPersonaGiuridica.piva = this.selectedSearch 
        if(Object.keys(this.$store.getters['Prospect/getAnagrafica']).length != 0){
          let get = this.$store.getters['Prospect/getAnagrafica']
          this.formDatiAnagraficiPersonaGiuridica = {...get.datiAnagrafici},
          this.formRappresentantePersonaGiuridica = {...get.rappresentantelegale},
          this.formRecapiti = {...get.recapiti},
          this.formResidenza = {...get.residenza},
          this.formDomiciliazioneDoc = {...get.domiciliazione},
          this.formFatturaEmail = {...get.fatturaEmail}
          if(Object.keys(this.formDomiciliazioneDoc).length != 0) this.btnDomiciliazioneEnabled = true
          if(Object.keys(this.formFatturaEmail).length != 0) this.btnFatturaEmail = true
        }
      }
      /*
      if(Object.keys(this.$store.getters['Prospect/getAnagrafica']).length != 0){
        let get = this.$store.getters['Prospect/getAnagrafica']
        this.formDatiAnagraficiPersonaFisica = {...get.datiAnagrafici},
        this.formRecapiti = {...get.recapiti},
        this.formResidenza = {...get.residenza},
        this.formDomiciliazioneDoc = {...get.domiciliazione},
        this.formFatturaEmail = {...get.fatturaEmail}
        if(Object.keys(this.formDomiciliazioneDoc).length != 0)
          this.btnDomiciliazioneEnabled = true
        if(Object.keys(this.formFatturaEmail).length != 0)
          this.btnFatturaEmail = true
      }*/
      },
    methods: { 
      ToggleFatturaEmail(){
        this.FatturaEmailCheck = !this.FatturaEmailCheck
      },
      DisableDomiciliazione(){
        this.btnDomiciliazioneEnabled = false
        this.DomiciliazioneDocCheck= false
      },
      ActiveDomiciliazione(){
        this.btnDomiciliazioneEnabled = true
      },
      DisableFattura(){
        this.btnFatturaEmail = false
        this.FatturaEmailCheck= false
      },
      ActiveFattura(){
        this.btnFatturaEmail = true
      },
      ToggleDatiAnagraficiGiuridica(){
          this.AnagraficaCheckGiuridica = !this.AnagraficaCheckGiuridica
      },
      ToggleDatiAnagrafici(){
        this.AnagraficaCheck = !this.AnagraficaCheck
      }, 
      ToggleRecapiti(){
        this.RecapitiCheck =  !this.RecapitiCheck
      },
      ToggleResidenza(){
        this.ResidenzaCheck = !this.ResidenzaCheck
      },
      ToggleRappresentante(){
        this.RappresentanteCheck = !this.RappresentanteCheck
      },
      ToggleDomiciliazioneDoc(){
        this.DomiciliazioneDocCheck = !this.DomiciliazioneDocCheck
      },
      goTo(){

        //CLEAR DATA
        this.contatoreDatiAnagraficiGiuridica = 0,
        this.contatoreRappresentate = 0,
        this.counterError = 0
        this.contatoreDatiAnagrafici =  0,
        this.contatoreRecapiti =  0,
        this.contatoreResidenza =  0,
        this.contatoreDomiciliazione =  0,
        this.contatoreFatturaEmail =  0


        if(this.selectedPerson == 'Persona Fisica'){
          console.log("datadinascita" , this.formDatiAnagraficiPersonaFisica.datadinascita)
          if(this.formDatiAnagraficiPersonaFisica.datadinascita == null) this.formDatiAnagraficiPersonaFisica.datadinascita = ''
          console.log("datadinascitaAfter" , this.formDatiAnagraficiPersonaFisica.datadinascita)
          for(let i in this.formDatiAnagraficiPersonaFisica){
            if(this.formDatiAnagraficiPersonaFisica[i] == ''){
              this.counterError ++
              this.errorformDatiAnagraficiPersonaFisica[i] = 'Il campo è obbligatorio'
              this.contatoreDatiAnagrafici ++
            }else{
              this.errorformDatiAnagraficiPersonaFisica[i] = ''
            }
          }
        }else{
            
          if(this.formDatiAnagraficiPersonaGiuridica.ragionesociale == ''){
            this.counterError ++
            this.errorformDatiAnagraficiPersonaGiuridica.ragionesociale = 'Errore sul campo ragione Sociale'
            this.contatoreDatiAnagraficiGiuridica ++
          }else this.errorformDatiAnagraficiPersonaGiuridica.ragionesociale = ''
        //console.log("datarilascio: ",this.formRappresentantePersonaGiuridica.datarilascio)
        //console.log("dattascadenza: ", this.formRappresentantePersonaGiuridica.datascadenza)
        if(this.formRappresentantePersonaGiuridica.datarilascio == null) this.formRappresentantePersonaGiuridica.datarilascio = ''
        if(this.formRappresentantePersonaGiuridica.datascadenza == null) this.formRappresentantePersonaGiuridica.datascadenza = ''
        for(let i in this.formRappresentantePersonaGiuridica){
           if(this.formRappresentantePersonaGiuridica[i] == ''){
              this.counterError ++
              this.errorformRappresentantePersonaGiuridica[i] = 'Il campo è obbligatorio'
              this.contatoreRappresentate ++
            }else this.errorformRappresentantePersonaGiuridica[i] = ''
        }
      }
       for(let i in this.formRecapiti){
          if(i == 'telefonoalt' || i == 'cellulare' || i == 'cellularealt' || i == 'fax' || i == 'pec') continue 
          if(this.formRecapiti[i] == ''){
            this.counterError ++
            this.errorformRecapiti[i] = 'Il campo è obbligatorio'
            this.contatoreRecapiti ++
          }else{
            this.errorformRecapiti[i] = ''
        }
      }
      for(let i in this.formResidenza){
         if(i == 'presso' || i == 'localita') continue 
          if(this.formResidenza[i] == ''){
            this.counterError ++
            this.errorformResidenza[i] = 'Il campo è obbligatorio'
            this.contatoreResidenza ++
          }else{
            this.errorformResidenza[i] = ''
        }
      }
      if(this.btnDomiciliazioneEnabled){
        for(let i in this.formDomiciliazioneDoc){
          if(i == 'presso' || i == 'localita') continue 
            if(this.formDomiciliazioneDoc[i] == ''){
              this.counterError ++
              this.errorformDomiciliazioneDoc[i] = 'Il campo è obbligatorio'
              this.contatoreDomiciliazione ++
            }else{
              this.errorformDomiciliazioneDoc[i] = ''
          }
        }
      }
      if(this.btnFatturaEmail){
        for(let i in this.formFatturaEmail){
            if(this.formFatturaEmail[i] == ''){
              this.counterError ++
              this.errorformFatturaEmail[i] = 'Il campo è obbligatorio'
              this.contatoreFatturaEmail ++
            }else{
              this.errorformFatturaEmail[i] = ''
          }
        }
      }
      if(this.counterError == 0){
        alert({
              title: "Tutto ok",
              message: "Tutti i campi sono stati inseriti correttamente",
              okButtonText: "OK"
            }).then(() => {
              console.log("Alert dialog closed");
            });
            if(this.selectedPerson == 'Persona Fisica'){
              var objForm = {
                'datiAnagrafici': this.formDatiAnagraficiPersonaFisica,
                'recapiti': this.formRecapiti,
                'residenza': this.formResidenza,
              }
            }else{
              var objForm = {
                'datiAnagrafici': this.formDatiAnagraficiPersonaGiuridica,
                'rappresentantelegale': this.formRappresentantePersonaGiuridica,
                'recapiti': this.formRecapiti,
                'residenza': this.formResidenza,
              }
            }
            if(this.btnDomiciliazioneEnabled){
              objForm = {...objForm,'domiciliazione': this.formDomiciliazioneDoc}
            }
            if(this.btnFatturaEmail){
              objForm = {...objForm,'fatturaEmail' : this.formFatturaEmail}
            }
      this.$store.dispatch('Prospect/setAnagrafica', objForm)
      this.$navigateTo(this.$router.Contratto, {
          animated: true,
            transition: {
              name: 'fade',
              duration: 500,
              curve: 'linear'
            }
            });
        }
        else{
          alert({
              title: "ERRORE:",
              message: "Correggi gli errori nei vari campi",
              okButtonText: "OK"
            }).then(() => {
              console.log("Alert dialog closed");
            });
        }
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