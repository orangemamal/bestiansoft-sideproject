import ContentsFrameComp from "@/views/ContentsFrameComp.vue"

import NavComp from "@/components/NavComp.vue"
import TitleComp from "@/components/TitleComp.vue"

import TableComp from "@/components/DetailComponents/TableComp.vue"
import PaginationComp from "@/components/DetailComponents/PaginationComp.vue"
import TabComp from "@/components/DetailComponents/TabComp.vue"


const GlobalComponentsPlugin = {
  install(app) {
    app.component("ContentsFrameComp", ContentsFrameComp)

    app.component("NavComp", NavComp)
    app.component("TitleComp", TitleComp)

    app.component("TableComp", TableComp)
    app.component("PaginationComp", PaginationComp)
    app.component("TabComp", TabComp)
  }
};

export default GlobalComponentsPlugin;