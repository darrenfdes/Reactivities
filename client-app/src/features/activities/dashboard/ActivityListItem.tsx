import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Item, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/Activity";
import { format } from "date-fns";

interface Props {
  activity: Activity;
}

const ActivityListItem: React.FC<Props> = ({ activity }) => {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" circular src="/assets/user.png" />
            <Item.Content>
              <Link to={`/activities/${activity.id}`}>
                <Item.Header>{activity.title}</Item.Header>
              </Link>
              <Item.Description>Hosted by Bob</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" />
          {format(activity.date!, "dd MMM yyyy h:mm aa")}
          <Icon name="marker" />
          {activity.venue}
        </span>
      </Segment>
      <Segment secondary>Attendees</Segment>
      <Segment clearing>
        <span>{activity.description}</span>
        <Button
          as={Link}
          to={`/activities/${activity.id}`}
          color="teal"
          floated="right"
          content="View"
        />
      </Segment>
    </Segment.Group>
  );
};

export default ActivityListItem;
