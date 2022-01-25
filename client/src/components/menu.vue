<template>
  <div class="menu">
    <div v-for="button in menuButtons" v-bind:key="button.title">
      <MenuButton
        :title="button.title"
        :icon="button.icon"
        :class="{ selected: button.isSelected }"
      />
    </div>
  </div>
</template>

<script>
import MenuButton from "@/components/menu-button.vue";
export default {
  components: {
    MenuButton,
  },
  data: function () {
    return {
      selectedItemId: "2",
    };
  },
  computed: {
    /**
     * Menu buttons.
     * @return {Array}
     */
    menuButtons() {
      return [
        {
          id: "0",
          href: "/home",
          title: "Все песни",
          isSelected: false,
          icon: [
            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyNCAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iNy41OTA4OCIgd2lkdGg9IjE1LjM4NjciIGhlaWdodD0iMS43MDk2NCIgcng9IjAuODU0ODE5IiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjEuMjY3OSAxMi45NjQ4VjAuODU0ODExSDIyLjk3NzZWMTUuODE0MUwyMS4yNjc5IDEyLjk2NDhaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNy41OTA4OCAxNS4zODY3TDcuNTkwODggMC44NTQ4MDdIOS4zMDA1MlYxNy4wOTY0TDcuNTkwODggMTUuMzg2N1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yMi4xMjE5IDE1LjIxMTJDMjIuNDc0OCAxNi40ODM5IDIxLjUxMDEgMTguMTQ1NiAxOS41MTkzIDE4LjY5NzdDMTcuNTI4NCAxOS4yNDk4IDE1Ljg0NTcgMTguMzIyMyAxNS40OTI3IDE3LjA0OTZDMTUuMTM5OCAxNS43NzY5IDE2LjEwNDQgMTQuMTE1MiAxOC4wOTUzIDEzLjU2MzFDMjAuMDg2MiAxMy4wMTEgMjEuNzY4OSAxMy45Mzg1IDIyLjEyMTkgMTUuMjExMloiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMS43Ii8+CjxwYXRoIGQ9Ik04LjM5MTU1IDE2LjQxMTJDOC43NDU0IDE3LjY4NzEgNy43Nzk2MyAxOS4zNTA1IDUuNzg4NzUgMTkuOTAyNkMzLjc5Nzg4IDIwLjQ1NDggMi4xMTMzMiAxOS41MjYzIDEuNzU5NDggMTguMjUwNEMxLjQwNTY0IDE2Ljk3NDUgMi4zNzE0MSAxNS4zMTEgNC4zNjIyOCAxNC43NTg5QzYuMzUzMTUgMTQuMjA2OCA4LjAzNzcxIDE1LjEzNTIgOC4zOTE1NSAxNi40MTEyWiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjciLz4KPC9zdmc+Cg==",
            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyNCAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iNy41OTA4OCIgd2lkdGg9IjE1LjM4NjciIGhlaWdodD0iMS43MDk2NCIgcng9IjAuODU0ODE5IiBmaWxsPSIjOTE5MTkxIi8+CjxwYXRoIGQ9Ik0yMS4yNjc5IDEyLjk2NDhWMC44NTQ4MTFIMjIuOTc3NlYxNS44MTQxTDIxLjI2NzkgMTIuOTY0OFoiIGZpbGw9IiM5MTkxOTEiLz4KPHBhdGggZD0iTTcuNTkwODggMTUuMzg2N0w3LjU5MDg4IDAuODU0ODA3SDkuMzAwNTJWMTcuMDk2NEw3LjU5MDg4IDE1LjM4NjdaIiBmaWxsPSIjOTE5MTkxIi8+CjxwYXRoIGQ9Ik0yMi4xMjE5IDE1LjIxMTJDMjIuNDc0OCAxNi40ODM5IDIxLjUxMDEgMTguMTQ1NiAxOS41MTkzIDE4LjY5NzdDMTcuNTI4NCAxOS4yNDk4IDE1Ljg0NTcgMTguMzIyMyAxNS40OTI3IDE3LjA0OTZDMTUuMTM5OCAxNS43NzY5IDE2LjEwNDQgMTQuMTE1MiAxOC4wOTUzIDEzLjU2MzFDMjAuMDg2MiAxMy4wMTEgMjEuNzY4OSAxMy45Mzg1IDIyLjEyMTkgMTUuMjExMloiIHN0cm9rZT0iIzkxOTE5MSIgc3Ryb2tlLXdpZHRoPSIxLjciLz4KPHBhdGggZD0iTTguMzkxNTUgMTYuNDExMkM4Ljc0NTQgMTcuNjg3MSA3Ljc3OTYzIDE5LjM1MDUgNS43ODg3NSAxOS45MDI2QzMuNzk3ODggMjAuNDU0OCAyLjExMzMyIDE5LjUyNjMgMS43NTk0OCAxOC4yNTA0QzEuNDA1NjQgMTYuOTc0NSAyLjM3MTQxIDE1LjMxMSA0LjM2MjI4IDE0Ljc1ODlDNi4zNTMxNSAxNC4yMDY4IDguMDM3NzEgMTUuMTM1MiA4LjM5MTU1IDE2LjQxMTJaIiBzdHJva2U9IiM5MTkxOTEiIHN0cm9rZS13aWR0aD0iMS43Ii8+Cjwvc3ZnPgo=",
          ],
        },
        {
          id: "1",
          href: "/home",
          title: "Плейлист",
          isSelected: false,
          icon: [
            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNyAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iNy42NTAwMiIgeT0iMi41NDk5OSIgd2lkdGg9IjkuMzUiIGhlaWdodD0iMS43IiByeD0iMC44NSIgZmlsbD0id2hpdGUiLz4KPHJlY3QgeT0iOS4zNDk5OCIgd2lkdGg9IjE3IiBoZWlnaHQ9IjEuNyIgcng9IjAuODUiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHk9IjE2LjE1IiB3aWR0aD0iMTciIGhlaWdodD0iMS43IiByeD0iMC44NSIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTUuNDk0MTIgMy42NjA0NkM1LjY5NTY3IDMuNTQ1MjkgNS42OTU2NyAzLjI1NDY4IDUuNDk0MTIgMy4xMzk1MUwwLjQ0ODc5MyAwLjI1NjQ2OUMwLjI0ODc5NiAwLjE0MjE4NSAtNC44NjM3NGUtMDUgMC4yODY1OTUgLTQuODYzNzRlLTA1IDAuNTE2OTQyVjYuMjgzMDNDLTQuODYzNzRlLTA1IDYuNTEzMzggMC4yNDg3OTYgNi42NTc3OSAwLjQ0ODc5MyA2LjU0MzUxTDUuNDk0MTIgMy42NjA0NloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=",
            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNyAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iNy42NTAwMiIgeT0iMi41NDk5OSIgd2lkdGg9IjkuMzUiIGhlaWdodD0iMS43IiByeD0iMC44NSIgZmlsbD0iIzkxOTE5MSIvPgo8cmVjdCB5PSI5LjM0OTk4IiB3aWR0aD0iMTciIGhlaWdodD0iMS43IiByeD0iMC44NSIgZmlsbD0iIzkxOTE5MSIvPgo8cmVjdCB5PSIxNi4xNSIgd2lkdGg9IjE3IiBoZWlnaHQ9IjEuNyIgcng9IjAuODUiIGZpbGw9IiM5MTkxOTEiLz4KPHBhdGggZD0iTTUuNDk0MTIgMy42NjA0NkM1LjY5NTY3IDMuNTQ1MjkgNS42OTU2NyAzLjI1NDY4IDUuNDk0MTIgMy4xMzk1MUwwLjQ0ODc5MyAwLjI1NjQ2OUMwLjI0ODc5NiAwLjE0MjE4NSAtNC44NjM3NGUtMDUgMC4yODY1OTUgLTQuODYzNzRlLTA1IDAuNTE2OTQyVjYuMjgzMDNDLTQuODYzNzRlLTA1IDYuNTEzMzggMC4yNDg3OTYgNi42NTc3OSAwLjQ0ODc5MyA2LjU0MzUxTDUuNDk0MTIgMy42NjA0NloiIGZpbGw9IiM5MTkxOTEiLz4KPC9zdmc+Cg==",
          ],
        },
        {
          id: "2",
          href: "/home",
          title: "Найти",
          isSelected: false,
          icon: [
            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAyMCAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNy44OTY2OSIgY3k9IjcuODE0MTIiIHI9IjYuNjE3MjYiIHRyYW5zZm9ybT0icm90YXRlKC04OC41IDcuODk2NjkgNy44MTQxMikiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPgo8cmVjdCB4PSIxNy41MTI2IiB5PSIxOC44NDIiIHdpZHRoPSI4LjQ2MzYyIiBoZWlnaHQ9IjEuNjkyNzIiIHJ4PSIwLjg0NjM2MiIgdHJhbnNmb3JtPSJyb3RhdGUoLTEzMy41IDE3LjUxMjYgMTguODQyKSIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==",
            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAyMCAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNy44OTY2OSIgY3k9IjcuODE0MTIiIHI9IjYuNjE3MjYiIHRyYW5zZm9ybT0icm90YXRlKC04OC41IDcuODk2NjkgNy44MTQxMikiIHN0cm9rZT0iIzkxOTE5MSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxyZWN0IHg9IjE3LjUxMjYiIHk9IjE4Ljg0MiIgd2lkdGg9IjguNDYzNjIiIGhlaWdodD0iMS42OTI3MiIgcng9IjAuODQ2MzYyIiB0cmFuc2Zvcm09InJvdGF0ZSgtMTMzLjUgMTcuNTEyNiAxOC44NDIpIiBmaWxsPSIjOTE5MTkxIi8+Cjwvc3ZnPgo=",
          ],
        },
        {
          id: "3",
          href: "/home",
          title: "Еще",
          isSelected: false,
          icon: [
            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjE4IiBoZWlnaHQ9IjIiIHJ4PSIxIiBmaWxsPSJ3aGl0ZSIvPgo8cmVjdCB5PSI4LjAwMDA2IiB3aWR0aD0iMTgiIGhlaWdodD0iMiIgcng9IjEiIGZpbGw9IndoaXRlIi8+CjxyZWN0IHk9IjE2LjAwMDEiIHdpZHRoPSIxOCIgaGVpZ2h0PSIyIiByeD0iMSIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==",
            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjE4IiBoZWlnaHQ9IjIiIHJ4PSIxIiBmaWxsPSIjOTE5MTkxIi8+CjxyZWN0IHk9IjguMDAwMDYiIHdpZHRoPSIxOCIgaGVpZ2h0PSIyIiByeD0iMSIgZmlsbD0iIzkxOTE5MSIvPgo8cmVjdCB5PSIxNi4wMDAxIiB3aWR0aD0iMTgiIGhlaWdodD0iMiIgcng9IjEiIGZpbGw9IiM5MTkxOTEiLz4KPC9zdmc+Cg==",
          ],
        },
      ].map((item) =>
        this.selectedItemId === item.id
          ? { ...item, icon: item.icon[0], isSelected: true }
          : { ...item, icon: item.icon[1] }
      );
    },
  },
};
</script>

<style scoped>
.menu {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: #000;
  color: #909090;
}
</style>
