<template>
   <core-container>
      <v-row>
         <v-col cols="12" sm="6">
            <v-radio-group v-model="returned.value" row>
               <v-radio v-for="(item, index) in returned.options" :key="index" 
               :label="item.text" :value="item.value"
               />
            </v-radio-group>
         </v-col>
         <v-col cols="12" sm="6"></v-col>
      </v-row>
      <v-row>
         <v-col cols="12">
            <v-simple-table>
               <thead>
                  <tr>
                     <th>
                     
                     </th>
                     <th>
                     
                     </th>
                     <th class="base-th">
                     日期
                     </th>
                     <th class="base-th">
                     Email
                     </th>
                     <th class="base-th">
                     主旨
                     </th>
                     <th class="base-th">
                     內容
                     </th>
                  </tr>
               </thead>
               <tbody>
                  <tr v-for="(item, index) in list" :key="index">
                     <td>
                        <v-btn @click.prevent="edit(item.id)" icon color="success">
                           <v-icon small>mdi-pencil</v-icon>
                        </v-btn>
                     </td>
                     <td>
                        <v-chip v-if="item.returned" color="success" text-color="white">已回覆</v-chip>
                        <v-chip v-else>未回覆</v-chip>
                     </td>
                     <td>
                        {{ item.createdAtText }}
                     </td>
                     <td>
                        {{ item.email }}
                     </td>
                     <td>
                        {{ item.subject }}
                     </td>
                     <td v-html="item.content">
                     </td>  
                  </tr>
               </tbody>
            </v-simple-table>
         </v-col>
      </v-row>
   </core-container>
</template>

<script>
export default {
   name: 'MessagesView',
   data: () => ({
      returned: {
         value: 0,
         options: [{
            value: 0, text: '未回覆'				
         },{
            value: 1, text: '已回覆'
         }]
      },

      list: [{
         email: 'jessie@rtfund.com', returned: true, createdAtText: '2020-02-06 14:32:09',
         subject : '客戶端伺服器軟體安裝',  content : `
         <p>
           您好，我們是做金融方面的軟體銷售，二月份有新客戶需要安裝。
         </p>
         <p>
           具體的工作是把我們的軟體，安裝在客戶端的伺服器，包括資料庫的安裝與備份任務的設置。
         </p>
         <p>
           如果你覺得這個工作可以勝任的話，你評估一下費用多少再回覆我，OK?
         </p>
         <p>
           RT Fund 業務經理  愛珊
         </p>
         `,
         return: {
            subject : 'RE:客戶端伺服器軟體安裝',  content : `
         <p>
           愛珊您好，關於您提出的需求，有幾點我請問一下：
         </p>
         <p>
           <ul>
           <li>
               伺服器是哪個操作系統? windows server 還是 linux ?          
           </li>
           <li>
               安裝的軟體是Web應用還是桌面軟體還是其他?     
           </li>
            <li>
               資料庫是哪一種資料庫?
           </li>
            <li>
               安裝日期大約是哪一天?
           </li>
         </p>
         <p>
           以上問題煩請您回覆，感謝.  祝 生意興隆
         </p>
         `,
         }
      }]

      
   }),
   methods: {
      edit() {

      }
   }
}
</script>

<style>

</style>