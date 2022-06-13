{/* <script> */}
export default {
  name: 'Item',
  props: {
    icon: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    return () => {
      const { icon, title } = props
      const vnodes = []

      if (icon) {
        vnodes.push(<i class={[icon, "sub-el-icon"]} />)
      }

      if (title) {
        vnodes.push(<span slot="title">{(title)}</span>)
      }
      return vnodes
    }
  }

}
// </script>

// <style scoped>
// .sub-el-icon {
//   font-size: 20px;
//   width: 20px;
//   height: 20px;
// }
// </style>
