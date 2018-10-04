import { Component, Prop, State } from "@stencil/core";
import { MatchResults } from "@stencil/router";
@Component({
  tag: "app-detail",
 // styleUrl: "../../global/global.css",
  shadow: true
})
export class AppDetail {
  @Prop()
  match: MatchResults;
  @State()
  article: any;

  componentWillLoad() {
    let id = this.match.params.id;
    console.log(this.match.params);
    return fetch(
      "https://polymer-101-workshop.cleverapps.io/api/blogpost/" + id
    )
      .then(response => response.json())
      .then(data => {
        this.article = data;
        console.log(id);
      });
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <div>
              <div>
                <div>
                  <h1>{this.article.title}</h1>
                </div>
              </div>

              <div>
                      <div>
                        <h3>Id: </h3> <a>{this.article._id}</a><br/>
                      </div>

                      <div>
                        <h3>Date de Création : </h3> <a>{this.article.creationDate}</a><br/>
                      </div>

                      <div>
                        <h3>Auteur: </h3> <a>{this.article.autor}</a><br/>
                      </div>

                       <div>
                        <h3>Article: </h3> <a>{this.article.article}</a><br/>
                      </div>
                <hr />
              </div>

              <form>
                <div>
                    
                    <button>Modifier</button>
                    <button>Supprimer</button>
                </div>
              </form>

              <div>
                  <stencil-route-link url="/">
                    <button> Home </button>
                  </stencil-route-link>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}