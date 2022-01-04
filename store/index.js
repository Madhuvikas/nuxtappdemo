import Vuex from "vuex";
import axios from "axios";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token:null
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      },
      addPost(state, post) {
        state.loadedPosts.push(post)
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(
          post => post.id === editedPost.id
        );
        state.loadedPosts[postIndex] = editedPost
      },
      setToken(state,token){
        state.token=token;      //store the token once action is complete or once get back a responce
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios
          .get(process.env.baseUrl + "/posts.json")
          .then(res => {
            const postsArray = [];
            for (const key in res.data) {
              postsArray.push({ ...res.data[key], id: key });
            }
            vuexContext.commit("setPosts", postsArray);
          })
          .catch(e => context.error(e));
      },
      addPost(vuexContext, post) {
        const createdPost = {
          ...post,
          updatedDate: new Date()
        }
        return axios
        .post("https://nuxt-blog.firebaseio.com/posts.json", createdPost)
        .then(result => {
          vuexContext.commit('addPost', {...createdPost, id: result.data.name})
        })
        .catch(e => console.log(e));
      },
      editPost({ commit }, editedPost) {
        return axios.put("https://nuxt-blog.firebaseio.com/posts/" +
          editedPost.id +
          ".json", editedPost)
          .then(res => {
            commit('editPost', editedPost)
          })
          .catch(e => console.log(e))
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      },
      authenticateUser(vuexContext,authData){
        let authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + process.env.fbAPIKey;
        if(!authData.isLogin){
          authUrl ="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" 
        + process.env.fbAPIKey
        }
        return this.$axios.$post(authUrl,{
          email:authData.email,
          password:authData.password,
          returnSecureToken:true
        })
        .then(result=>{
        vuexContext.commit('setToken',result.idToken )
          })
        .catch(e=> console.log(e));
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    }
  });
};

export default createStore;
