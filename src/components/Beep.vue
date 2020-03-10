<template>
    <div >
        <h1>Beep Testing</h1>
        <div>
            <div v-for="post in posts" :key="post.id">
                <p class="name">{{post.name}}</p>
                <p class="email">{{post.email}}</p>
                <div v-for="promotion in post.promotions" :key="post.quantity" class="post">
                    <table>
                        <tr>
                        <td>{{promotion.title}}</td>
                        <td>{{promotion.quantity}}</td>
                        <td>{{promotion.type}}</td>
                        <td>{{promotion.discount}}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
  data() {
      return {
        posts: []
      }
  },
  mounted(){
      this.$http.get('https://dev.beepbeep.tech/v1/sample_customer')
      .then(res => {
          this.posts = res;                                      
      })
      .catch(error => {
          console.log('Error:', error);
      })
  }
}
</script>

<style scoped>
    h1{
        color:white;
        font-weight: 400;
        font-size: 4em;
        text-shadow: 2px 2px 4px #000000;
    }
    .name{
        font-size: 2em;
        
    }
    .email{
        font-size: 2em;
    }
    .name,.email {
        width: 400px;
        margin-left: 3rem;
    }
    th, td {
    width:100px;
    padding: 10px;
    text-align: left;  
    background-color: darkcyan;  
    color: #f2f2f2;
    }
    
</style>