import React from "react";
import withFetch from "./withFetch";
import Player from "./Player";

const Video = props => {
  const { loading, error, data } = props;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  return <Player id={props.match.params.id} {...data.results} />;
};

export default withFetch((api, user, props) =>
  api.video(user, props.match.params.id)
)(Video);
