import React, { Component } from "react";
import ShowMoreText from "react-show-more-text";

const longText = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore Beatae vitae dicta sunt explicabo. 
Nemo enim ipsam voluptatem quia voluptas
 sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`;

export class ShowText extends Component {
  executeOnClick(isExpanded) {
    console.log(isExpanded);
  }
  render() {
    return (
      <div>
            <ShowMoreText
        
         lines={5}
          more="Read more"
          less="Show less"
          anchorClass="more"
          onClick={() => this.executeOnClick()}
          expanded={false}
        >
          {longText}
        </ShowMoreText>
      </div>
    );
  }
}

export default ShowText;
