import { Component } from "@stencil/core";

@Component({
  tag: "app-footer",
//  styleUrl: "../../global/global.css",
  shadow: true
})
export class AppFooter {
  render() {
    return (
      <div>
        <div>
          <hr/>
          <p>
            Travail réalisé par :
            <a href="http://github.com/BerrouMoustapha">github.com/BerrouMoustapha</a><br/>
            <a href="http://linkedin.com/BerrouMoustapha">linkedin.com/BerrouMoustapha</a><br/>
          </p>
        </div>
      </div>
    );
  }
}