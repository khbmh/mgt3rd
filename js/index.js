Promise.all([
  fetch(
    'https://raw.githubusercontent.com/khbmh/mgt3rdJson/refs/heads/main/courses.json',
  ).then((res) => res.json()),
  fetch(
    'https://raw.githubusercontent.com/khbmh/mgt3rdJson/refs/heads/main/files.json',
  ).then((res) => res.json()),
])
  .then(([courses, files]) => {
    // Pass both courses and files to load function
    loadCoursesAndFiles(courses, files);
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });

const courseContainer = document.querySelector('#course-container');

function loadCoursesAndFiles(courses, files) {
  courseContainer.innerHTML = `
  ${courses
    .map((course) => {
      return `
      <section id=${course.id} class="w-full py-12">
        <div class="container mt-12 max-w-[1080px] mx-auto text-center">
          <div class="mx-auto w-fit">
            <p class="space-x-1 mb-2 px-3 py-1 rounded-full bg-lightRose text-brightRose inline-block"><i
                class="ri-arrow-right-line"></i><span class="pr-3">BCC ${
                  course.id
                }</span></p>
          </div>
          <h1 class="text-4xl md:text-5xl my-3">${course.name}</h1>
          <div class="mx-auto w-fit mb-4">
            <p
              class="space-x-1 mx-4 mb-2 px-6 py-2 rounded-full bg-hardRose text-brightRose border-t border-lightRose flex items-center justify-between">
              <i class="ri-arrow-right-line text-lightRose"></i><span class="px-1 md:px-2">${
                course.instructor
              }</span>
              <i class="ri-user-2-fill rounded-full bg-lightRose text-hardRose px-1"></i>
            </p>
          </div>
          
        
          
          
          <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 my-4 gap-4 md:gap-8 px-8'>
            ${course.materials
              .map((item) => {
                return `
           <div class="rounded-lg md:col-span-2 lg:col-span-1">
           <div class='rounded-full object-cover hover:opacity-90'>
           <div class=${item.bg}  style="border-radius: 12px;">
           <div
           class="max-w-[70vw] m-auto cursor-pointer rounded-xl py-5 px-6 md:px-5 text-hardRose gap-8 md:gap-0 flex flex-row md:flex-col items-center justify-between md:justify-center"
           onclick=${item.modal}.showModal()>
  
  
                <p class="text-4xl md:p-5">
                  <i class=${item.icon}></i>
                </p>
                <p class="text-lg font-bold">${item.name}
                  <i class="ri-arrow-drop-up-line rounded-full bg-hardRose text-brightRose opacity-[.6] font-thin"></i>
  
                </p>
  
                </div>
                </div>
                </div>
  
              <dialog id=${item.modal} class="modal">
                <div class="modal-box bg-hardRose h-fit max-h-[85vh] my-auto">
                  <p class="space-x-1 text-sm mb-2 px-3 py-1 rounded-full bg-lightRose text-brightRose inline-block"><i
                      class="ri-arrow-right-line"></i><span class="pr-3">${
                        item.course
                      } | ${item.name}</span></p>
  
                  <div class="overflow-auto h-fit max-h-[70vh]">
  
                    ${(() => {
                      const filteredFiles = files.filter(
                        (file) => file.id === item.id,
                      );
                      if (filteredFiles.length === 0) {
                        return `
      <p>
        <img src="https://i.pinimg.com/originals/ea/8b/13/ea8b137fbc46bea2f12cc9087e57053d.gif"
          class="rounded-xl lg:w-[20vw] mx-auto my-4" alt="">
      </p>
      <p>Nothing is here!</p>`;
                      }
                      return filteredFiles
                        .map((file) => {
                          return `
      <a href=${file.url} target='blank'>
        <p class="cursor-pointer py-1 my-3 px-2 bg-hardRose rounded-[15px] shadow border border-brightRose">
          ${file.title}
        </p>
      </a>`;
                        })
                        .join('');
                    })()}
  
                  </div>



                  <div class="modal-action">
                    <form method="dialog">
                      <button class="space-x-1 mr-3 text-hardRose bg-brightRose py-1 px-4 rounded-full cursor-pointer">
                        <span class="font-black text-lg">Close</span>
                        <i class="ri-arrow-drop-down-line rounded-full bg-hardRose text-brightRose p-1"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          
          
          `;
              })
              .join('')}</div>
  
  
  
           
  
  
  
          </div>
        </div>
      </section>
    `;
    })
    .join('')}
  `;
}

/*
footer 
*/

const header = document.getElementById('header');

header.innerHTML = `<div class="navbar backdrop-blur-3xl absolute max-w-[1600px] xl:px-[110px]">
          <div class="navbar-start">
            <a href="#home"
              class="text-xl md:text-2xl tracking-widest font-bold px-2 cursor-pointer flex items-center gap-1">MGT3rd<sub
                class="animate-ping">-</sub></a>
          </div>
          <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1 xl:text-lg lg:pt-5">
              <li><a href="#201">Finance</a></li>
              <li><a href="#202">HRM</a></li>
              <li><a href="#203">Banking</a></li>
              <li><a href="#204">Economics</a></li>
              <li><a href="#205">Taxation</a></li>
            </ul>
          </div>
          <div class="navbar-end hidden space-x-2 mr-12 md:flex lg:mr-0">
            <a href="#updates">
              <button class="space-x-1 mr-3 text-hardRose bg-brightRose py-1 px-4 rounded-full cursor-pointer">
                <span class="font-black text-lg">Updates</span>
                <i class="rounded-full bg-hardRose text-brightRose p-1">
                  <i class="ri-bubble-chart-line animate-pulse"></i>
                </i>
              </button>
            </a>
          </div>
          <!-- ri-bubble-chart-fill -->
          <div class="dropdown absolute right-0">

            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
              <i class="ri-menu-3-line px-2 py-2 rounded-full bg-hardRose border border-brightRose cursor-pointer"></i>
            </div>

            <ul tabindex="0"
              class="menu relative menu-sm dropdown-content space-y-4 top-12 rounded-box mt-3 right-6 w-[90vw] md:w-[60vw] p-4 border-[1px] border-lightRose shadow-2xl">

              <div class="h-full flex flex-col gap-3 w-full z-[9]">
                <li><a class="text-md border-l-2 border-hclThree bg-gradient-to-r from-white/10 to-transparent" href="#201">Business Finance</a></li>
                <li><a class="text-md border-l-2 border-hclThree bg-gradient-to-r from-white/10 to-transparent" href="#202">Human Resource Management</a></li>
                <li><a class="text-md border-l-2 border-hclThree bg-gradient-to-r from-white/10 to-transparent" href="#203">Principles of Banking</a></li>
                <li><a class="text-md border-l-2 border-hclThree bg-gradient-to-r from-white/10 to-transparent" href="#204">MacroEconomics</a></li>
                <li><a class="text-md border-l-2 border-hclThree bg-gradient-to-r from-white/10 to-transparent" href="#205">Theory and Practices of Taxation</a></li>
                <div class="pt-4 flex flex-col md:hidden gap-3">
                  <a class="mx-1" href="#updates">
                    <button class="space-x-1 text-hardRose bg-brightRose py-2 px-6 rounded-full cursor-pointer">
                      <span class="font-black text-lg">Updates</span>
                      <i class="rounded-full bg-hardRose text-brightRose p-1">
                        <i class="ri-bubble-chart-line animate-pulse"></i>
                      </i>
                    </button>
                  </a>
                </div>
              </div>
              <div class="h-full w-full absolute bg-hardRose blur-3xl shadow-xl rounded-box -top-2 left-0 z-[7]">
              </div>

            </ul>
          </div>

        </div>`;

const about = document.getElementById('about');

about.innerHTML = `
<h1 class="text-2xl md:text-3xl lg:text-6xl">University of Chittagong</h1>
          <h2 class="text-xl md:text-2xl lg:text-5xl my-3 lg:my-5">Department of Management</h2>
          <h4
            class="font-black text-xl md:text-2xl lg:text-3xl bg-hardRose border border-lightRose w-fit mx-auto rounded-t-3xl border-b-0 py-3 -mb-0 px-4">
            Batch 36<sup class="text-sm md:text-lg lg:text-xl">th</sup></h4>
          <h3 id="updates"
            class="text-xl md:text-2xl lg:text-3xl bg-hardRose border border-lightRose mt-0 w-fit mx-auto rounded-full py-3 px-4">
            <i class="ri-arrow-right-double-line rounded-full text-clFive animate-pulse p-1"></i>
            <span class="font-black text-clThree px-3">3rd Semester</span>
            <!-- <i class=" bg-hardRose text-brightRose mr-3 p-1"></i> -->
            <i class="ri-arrow-left-double-line rounded-full text-clFive animate-pulse p-1 delay-150"></i>
          </h3>`;

const footer = document.getElementById('footer');
footer.innerHTML = `<hr class="border-lightRose">
      <a href="https://mahi-here.netlify.app" target="_blank">
        <button
          class="space-x-1 hover:opacity-[.8] bg-lightRose py-2 px-4 my-6 rounded-full border-b border-brightRose cursor-pointer">
          <span class="font-black text-lg text-hclThree py-4 pl-1">Made by<i
              class="ri-signpost-fill pl-2 pr-1 text-lg text-hclFour"></i></span></span><span
            class="font-mono tracking-widest text-xl font-black text-hclTwo" target="_blank">Mahi</span>
        </button>
      </a>`;
