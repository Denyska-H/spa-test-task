import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { fetchDescription } from "../../features/Description/asyncActions";

import { ArticleInfo } from "../../components";

function Article() {
  const dispatch = useAppDispatch();
  const { infoID } = useParams<{ infoID?: string }>();

  const { status, description } = useSelector(
    (state: RootState) => state.description,
  );

  useEffect(() => {
    async function fetchDetailedData() {
      const descID = infoID || "";
      dispatch(fetchDescription({ id: descID }));
    }
    fetchDetailedData();
  }, [dispatch, infoID]);

  return (
    <section className="article">
      <ArticleInfo {...description} />
    </section>
  );
}

export default Article;
