
// document.querySelector('.menu_button').addEventListener('click', ()=>{
//     document.querySelector('.slide').classList.toggle('.slideToggle');

//     if(document.querySelector('..slide').classList.contains('.sidebarToggle'))
//     {
//         document.querySelector('.menu_button').style.display = 'inline'
//     }
//     else{
//        document.querySelector('.menu_button').style.display = 'none'
//     }
    
// })



const menuButton=document.getElementById('menu-button');
const sideBar=document.getElementById('sidebar')

function toggleSidebar(){
    const body=document.querySelector('body');
    body.classList.toggle('sidebar-open')
}