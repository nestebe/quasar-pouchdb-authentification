<template>


  <div class="card">
    <div class="card-title bg-primary text-white">
      Connexion
    </div>
    <div class="card-content card-force-top-padding">
      <div class="item multiple-lines">
        <i class="item-primary">perm_identity</i>
        <div class="item-content">
          <div class="floating-label">
            <input required class="full-width">
            <label>Identifiant</label>
          </div>
        </div>
      </div>
      <div class="item multiple-lines">
        <i class="item-primary">lock</i>
        <div class="item-content">
          <div class="floating-label">
            <input type="password" required class="full-width">
            <label>Mot de passe</label>
          </div>
        </div>
      </div>
      <button class="primary  small"><i class="on-left">directions</i> Connexion</button>
      <button class="primary  small" @click="$refs.inscriptionModal.open()"> <i class="on-left">edit</i> Inscription</button>
    </div>


    <q-modal ref="inscriptionModal">


      <div class="card">
        <div class="card-title bg-primary text-white">
          Inscription
        </div>
        <div class="card-content card-force-top-padding">
          <div class="item multiple-lines">
            <i class="item-primary">perm_identity</i>
            <div class="item-content">
              <div class="floating-label">
                <input required class="full-width">
                <label>Email</label>
              </div>
            </div>
          </div>
          <div class="item multiple-lines">
            <i class="item-primary">lock</i>
            <div class="item-content">
              <div class="floating-label">
                <input type="password" required class="full-width">
                <label>Mot de passe</label>
              </div>
            </div>
          </div>
                   <div class="item multiple-lines">
            <i class="item-primary">lock</i>
            <div class="item-content">
              <div class="floating-label">
                <input type="password" required class="full-width">
                <label>Répeter mot de passe</label>
              </div>
            </div>
          </div>

          <button class="primary  small" @click="$refs.inscriptionModal.close()"> <i class="on-left">edit</i> Valider</button>
        </div>
      </div>



    </q-modal>

  </div>



</template>

<script>
</script>