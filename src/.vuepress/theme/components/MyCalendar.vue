<script lang="ts">
  import { Calendar } from 'v-calendar';
  import 'v-calendar/style.css';
  import { defineComponent, h } from 'vue';
  export default defineComponent({
    components: {
      Calendar,
    },
    name: 'MyCalendar',
    setup() {
        return () => h('div',{class:'vp-blog-calendar'},[
            h(Calendar,{transparent:true,borderless:true})
        ])},
    },
  )
</script>