function init() {
  // 把日历图标 放到  搜索图标前面
  var barSearch = document.getElementById("barSearch");
  barSearch.insertAdjacentHTML(
    "beforebegin",
    '<div id="calendar"class="toolbar__item b3-tooltips b3-tooltips__se" aria-label="日历" ></div>'
  );
  let calendarIcon = document.getElementById("calendar");

  // 日历面板，这里是插入挂件
  barSearch.insertAdjacentHTML(
    "beforeend",
    ` <div
    data-node-index="1"
    data-type="NodeWidget"
    class="iframe"
    data-subtype="widget"
  >
    <div class="iframe-content">
      <iframe id="calendarPanel" 
      style="visibility:hidden;position: fixed; z-index: 1000; top: 225px; right: 10px;  width: 300px; height: 360px; background: white; box-shadow: rgba(0, 0, 0, 0.55) 0px 0px 6px 0px;  transform: translate(-50%, -50%); overflow: auto;" src="/widgets/日历" data-src="/widgets/日历" data-subtype="widget" ></iframe>
    </div>
  </div>`
  );

  let calendarPanel = document.getElementById("calendarPanel");

  //calendarIcon.innerHTML = `<svg t="1662957805816" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2374" width="200" height="200"><path d="M870.4 136.533333H153.6a68.266667 68.266667 0 0 0-68.266667 68.266667v682.666667a68.266667 68.266667 0 0 0 68.266667 68.266666h716.8a68.266667 68.266667 0 0 0 68.266667-68.266666V204.8a68.266667 68.266667 0 0 0-68.266667-68.266667zM153.6 204.8h716.8v682.666667H153.6V204.8z" fill="#ffffff" p-id="2375"></path><path d="M904.533333 363.093333a34.133333 34.133333 0 0 1 2.56 68.181334l-2.56 0.085333H119.466667a34.133333 34.133333 0 0 1-2.56-68.164267l2.56-0.1024h785.066666zM324.266667 68.266667a34.133333 34.133333 0 0 1 34.048 31.573333L358.4 102.4v136.533333a34.133333 34.133333 0 0 1-68.181333 2.56L290.133333 238.933333V102.4a34.133333 34.133333 0 0 1 34.133334-34.133333zM699.733333 68.266667a34.133333 34.133333 0 0 1 34.048 31.573333L733.866667 102.4v136.533333a34.133333 34.133333 0 0 1-68.181334 2.56L665.6 238.933333V102.4a34.133333 34.133333 0 0 1 34.133333-34.133333z" fill="#ffffff" p-id="2376"></path><path d="M546.133333 785.066667h-68.266666V529.066667h34.133333a34.133333 34.133333 0 0 1 34.133333 34.133333v221.866667z" fill="#ffffff" p-id="2377"></path></svg>`;
  calendarIcon.innerHTML = `<svg t="1662957805816" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2374" width="200" height="200"><path d="M797.257 402.286h-570.514v113.371h570.514v-113.371zM910.629 76.8h-58.514v-76.8h-113.371v76.8h-453.486v-76.8h-113.371v76.8h-58.514c-62.171 0-113.371 51.2-113.371 113.371v724.114c0 62.171 51.2 109.714 113.371 109.714h797.257c62.171 0 113.371-47.543 113.371-109.714v-724.114c0-62.171-51.2-113.371-113.371-113.371zM910.629 914.286h-797.257v-625.371h797.257v625.371zM625.371 629.029h-398.629v113.371h398.629v-113.371z"></path></svg>`;
  calendarIcon.addEventListener(
    "click",
    function (e) {
      e.stopPropagation();
      if (calendarPanel.style.visibility === "hidden") {
        calendarPanel.style.visibility = "visible";
      } else {
        calendarPanel.style.visibility = "hidden";
      }
    },
    false
  );
  calendarPanel.addEventListener('click',function(e){e.stopPropagation()},false)

   // 隐藏历史面板
   function hideCalendarPanel() {
    if (calendarPanel.style.visibility === "visible") {
      calendarPanel.style.visibility = "hidden";
    }
  }
  // 点击其他区域时，隐藏日历面板
  window.addEventListener("click", hideCalendarPanel, false);
}
window.onload = setTimeout(init, 500);
