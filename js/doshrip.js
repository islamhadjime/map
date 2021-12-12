


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
          <div class="title">${this.title}</div>
          <div class="canvas_grav">
              <canvas id="bar-chart"></canvas>
          </div>
          <h3>статистика</h3>
          <div class="text">
              <span class="id_1"></span>
              <span class="id_2"></span>
              <span class="id_3"></span>
              <span class="id_4"></span>
              <span class="id_5"></span>
              <span class="id_6"></span>
          </div>
      </div>
      `
      document.body.append(div)

  }
  dashrip(){
    console.log(this.data)
    new Chart(document.getElementById("bar-chart"), {
        type: 'bar',
        data: {
          labels: ["Насиления", "Смертность", "Статистика Больнице", "Успешный лечения", "не выздоровели"],
          datasets: [
            {
              label: "Population (millions)",
              backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
              data: [
                  20,23
                  ,734,784,433
                ]
            }
          ]
        },
        options: {
          legend: { display: false },
          title: {
            display: true,
            text: 'Статистка по '
          }
        }
    })

  }
}
