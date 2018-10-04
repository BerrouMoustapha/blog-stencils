import { Component, State } from "@stencil/core";

@Component({
  tag: "app-home",
 // styleUrl: "../../global/global.css",
  shadow: true
})
export class AppHome {
  @State()
  articles: any;

  componentWillLoad() {
    return fetch("https://polymer-101-workshop.cleverapps.io/api/blogpost/")
      .then(response => response.json())
      .then(data => {
        this.articles = data;
      });
  }

  trim(str: string) {
    if(str===null){
      return "Pas de texte"
    } else {
      let txt = Math.min(141, str.length);
      let point = str.length <= 140 ? "" : "...";
      return str.substring(0, txt) + point;
    }

  }


  render() {
    return (
      <div>
        {this.articles.map(item => {
          return (
            <div>
              <div>
                <div>
                  <div>

                      <div>
                        <h3>Titre: </h3> <a>{item.title}</a><br/>
                      </div>

                      <div>
                        <h3>Date de Création : </h3> <a>{item.creationDate}</a><br/>
                      </div>

                      <div>
                        <h3>Auteur: </h3> <a>{item.autor}</a><br/>
                      </div>
                     
                      <div>
                        <h3>Article: </h3> <a>{this.trim(item.article)}</a><br/>
                      </div>

                   </div>
                   <div>
                        <stencil-route-link url={"/detail/" + item._id}>
                          <button>Details</button>
                        </stencil-route-link>
                   </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}