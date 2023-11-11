<script lang="ts">
import { h } from "vue";
import DropTransition from "@theme-hope/components/transitions/DropTransition";
import BloggerInfo from "@theme-hope/modules/blog/components/BloggerInfo";
import InfoList from "@theme-hope/modules/blog/components/InfoList";
import MyCalendar from "./MyCalendar.vue";
import "vuepress-theme-hope/modules/blog/styles/info-panel.scss";
const InfoPanel = () => h("aside", { class: "vp-blog-info-wrapper" }, [
    h(DropTransition, () => h(BloggerInfo)),
    h(DropTransition, { delay: 0.04 }, () => h(InfoList)),
    h(DropTransition,() => h(MyCalendar)),
]);
InfoPanel.displayName = "InfoPanel";
export default InfoPanel;
//# sourceMappingURL=InfoPanel.js.map
</script>