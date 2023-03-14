
export default function DashBoard(){
    

const channel = window.Echo.channel('public.overallnotice.1')
channel.subscribed(() => {
            console.log('suscribedd!');
        }).listen('.overallnotice', (event) => {
            console.log(event,'nabin');
        })

        // const loginchannel = window.Echo.channel('public.login.1')
        // loginchannel.subscribed(() => {
        //     console.log('suscribed to login!');
        // }).listen('.login', (event) => {
        //     localStorage.setItem('tokens',event['token']);
        //     localStorage.setItem('ids',event["id"]);
        //     localStorage.setItem('notificationss',event["notificationss"]);
        // })
        
        
const specificchannel = window.Echo.channel('public.specificnotf.1')
specificchannel.subscribed(() => {
            console.log('specificnotf!');
}).listen('.specificnotf', (event) => {
            document.getElementById('notice2').innerHTML=event["message"];
            console.log(event);
})
        
        
const specificclasschannel = window.Echo.channel('public.specificclass.1')
        specificclasschannel.subscribed(() => {
            console.log('specificclass!');
        }).listen('.specificclass', (event) => {
            console.log(event);
        })
        
        const billprintedchannel = window.Echo.channel('public.billprinted.1')
        billprintedchannel.subscribed(() => {
            console.log('billprintedchannel!');
        }).listen('.billprinted', (event) => {
            console.log(event);
        })
        
        const resultpublishedchannel = window.Echo.channel('public.resultpublished.1')
        resultpublishedchannel.subscribed(() => {
            console.log('resultpublishedchannel!');
        }).listen('.resultpublished', (event) => {
            document.getElementById('notice2').innerHTML=event["message"];
            console.log(event);
        })
       
}