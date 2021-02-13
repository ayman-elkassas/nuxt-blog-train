export default{
  state:()=>({
    posts:[],
    selectedPost:{}
  }),
  mutations:{
    updatePosts(state,posts){
      state.posts=posts;
    },
    updateSelectPost(state,post){
      state.selectedPost=post;
    }
  },
  actions:{
    nuxtServerInit({}){
      console.log("nuxtServerInit called")
    }
  }
}

