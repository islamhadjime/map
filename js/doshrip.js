


let div = document.querySelector('.conten_dashrib')

class Structur{
  constructor(title,data){
    this.title = title;
    this.data = data
  }

  loop(){
    console.log(this.data)
    this.addHTML()
    this.dashrip()
  }



  addHTML(){
    div.innerHTML = `
      <div class="inf">
          <div class="logo">
            <div class="logo_img">
              <img src="./img/logo.png">
            </div>
            <div class="logo_title">
              Министерство здравоохранения Чеченском Республики
            <div>
          </div>
          <div class="title">${this.title}</div>
          <div class="canvas_grav">
              <canvas id="bar-chart"></canvas>

          </div>
          <canvas id="bars-chart"></canvas>
          <div class="card_ned">
            <div class="city">
            <p>Город</p>
            <a class="btn red"  href="">3941</a>

            </div>
            <div class="city">
            <p>Району</p>
            <a class="btn" href="">14</a>
            </div>
      </div>
      `
      document.body.append(div)

  }
  dashrip(){
    new Chart(document.getElementById("bar-chart"), {
        type: 'bar',
        data: {
          labels: ["Насиления", "Смертность", "Статистика Больнице", "Успешный лечения", "не выздоровели"],
          datasets: [
            {
              label: "Population (millions)",
              backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
              data: [
                  3400,1303
                  ,134,784,433
                ]
            }
          ]
        },
        options: {
          legend: { display: false },
          title: {
            display: true,
            text: 'Сравнение Районов на определенную дату '
          }
        }
    })
    new Chart(document.getElementById("bars-chart"), {
        type: 'bar',
        data: {
          labels: ["Насиления", "Смертность", "Статистика Больнице", "Успешный лечения", "не выздоровели"],
          datasets: [
            {
              label: "Population (millions)",
              backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
              data: [
                  640,303
                  ,434,184,233
                ]
            }
          ]
        },
        options: {
          legend: { display: false },
          title: {
            display: true,
            text: 'Сравнение Районов на определенную неделю '
          }
        }
    })

  }
}
