import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { fetchDescription } from "../../features/Description/asyncActions";

import { ArticleInfo, Loader } from "../../components";

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
      {status === "rejected" ? (
        <div className="article__error">
          Oops! <br />
          😔 Something went wrong 😔
        </div>
      ) : (
        <div>
          {status === "pending" ? <Loader /> : <ArticleInfo {...description} />}
        </div>
      )}
    </section>
  );
}

export default Article;
