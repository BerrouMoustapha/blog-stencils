import { Component } from "@stencil/core";

@Component({
  tag: "app-header",
 // styleUrl: "../../global/global.css",
  shadow: true
})
export class AppHeader {
 componentWillLoad() {
       console.log("pour le header sa marche ");
      }
  
  render() {
    return (
      <div>
        <header>
          <div>
            
              <div>
                <h1>Blog DOSI</h1>
                <h4>TP Stencil </h4>
              </div>
            
            <div>
              <div>
                <ul>
                  <stencil-route-link url="/home">
                    {" "}
                    <li> Home </li>{" "}
                  </stencil-route-link>
                  <stencil-route-link url="/add">
                    {" "}
                    <li> New Post</li>{" "}
                  </stencil-route-link>
                </ul>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}