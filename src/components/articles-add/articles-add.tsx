import {Component, State, Prop} from "@stencil/core";
import {RouterHistory} from "@stencil/router";

@Component({
  tag: "articles-add",
  shadow: true
})
export class ArticlesAdd {
  @State()  title: string;
  @State()  article: string;
  @State()  author: string;
  @Prop()   home : RouterHistory;


  retourner(){
    this.home.goBack();
  }


  postArticle(e) {
    
    e.preventDefault();
    console.log("!");
    const title = this.title;
    const article = this.article;
    const autor = this.author;
    const payload = {
      title,
      article,
      autor
    };

    fetch("https://polymer-101-workshop.cleverapps.io/api/blogpost", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    })
      .then(function(res) { this.retourner();
        return res.json();
      })
      .then(function(data) {
        console.log(JSON.stringify(data));
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
                  <h1>Nouveau Artical</h1>
                </div>
              </div>

              <div>
                <form>
                  <div>
                    <label>Title</label>
                    <p>
                      <input type="text"  onInput={(e: any) => (this.title = e.target.value)}  />
                    </p>
                  </div>

                  <div>
                    <label>Artical</label>
                    <p>
                      <textarea  onInput={(e: any) => (this.article = e.target.value)} />
                    </p>
                  </div>

                  <div>
                    <label>Autor</label>
                    <p>
                      <input type="text" onInput={(e: any) => (this.author = e.target.value)}  />
                    </p>
                  </div>

                  <div >

                      <stencil-route-link url="/">
                        <button  onClick={this.postArticle.bind(this)} >  Ajouter </button>
                      </stencil-route-link>
                 
                      <stencil-route-link url="/" >
                        <button>Cancel</button>
                      </stencil-route-link>

                  </div>

                </form>
              </div>
              <div>
                <p>
                  <stencil-route-link url="/" >
                   <button> Home </button>
                  </stencil-route-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
