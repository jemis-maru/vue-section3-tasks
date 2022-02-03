const app = Vue.createApp({
  data() {
    return {
      goalsArr: [],
      goalData: '',
    };
  },
  methods: {
    addGoal(){
      if(this.goalData != ''){
        this.goalsArr.push(this.goalData);
        this.goalData = '';
      }
      else{
        alert('You need to enter something to add a goal');
      }
    },
    removeGoal(ind){
      this.goalsArr.splice(ind, 1);
    }
  }
});

app.mount('#user-goals');
