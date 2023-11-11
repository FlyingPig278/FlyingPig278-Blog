<template>
    <div>
        <Calendar :is-dark="isDark" />
    </div>
</template>
  
<script lang="ts">
  import { Calendar } from 'v-calendar';
  import 'v-calendar/style.css';
  import { ref } from 'vue';
  export default {
    components: {
      Calendar,
    },
    data() {
      return {
        date: new Date(),
        isDark: ref(false),
      };
    },
  }
</script>