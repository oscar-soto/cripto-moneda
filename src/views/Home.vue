<template>
   <div>
      <px-assests-table :assets="assets"></px-assests-table>
   </div>
</template>
<script>
   
   import api from '@/api.js';
   import PxAssestsTable from '@/components/PxAssestsTable';

   export default {
      name: 'home',

      components: { 
         PxAssestsTable 
      },

      data() {
         return {
            assets: []
         }
      },

      created() {
         api.getAssest()
            .then(assets => this.assets = assets)
      }
   }
</script>