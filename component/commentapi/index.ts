import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { CommentData } from "./../type/type";

const apiUrl = "https://64d497b9b592423e46944e99.mockapi.io/comment/v1/com1";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;

  switch (method) {
    case "GET":
      try {
        const response = await axios.get<CommentData[]>(apiUrl);
        res.status(200).json(response.data);
      } catch (error) {
        res.status(500).json({ error: "server error ..." });
      }
      break;

    case "POST":
      try {
        const response = await axios.post<CommentData[]>(apiUrl, body);
        res.status(201).json(response.data);
      } catch (error) {
        res.status(500).json({ error: "server error ..." });
      }
      break;

    case "PUT":
      try {
        const response = await axios.put<CommentData>(
          `${apiUrl}/${body.id}`,
          body
        );
        res.status(200).json(response.data);
      } catch (error) {
        res.status(500).json({ error: "server error ..." });
      }
      break;

    case "DELETE":
      try {
        const response = await axios.delete<CommentData>(
          `${apiUrl}/${body.id}`
        );
        res.status(200).json(response.data);
      } catch (error) {
        res.status(500).json({ error: "server error ..." });
      }
      break;

    default:
      res.status(405).json({ error: "The method is not allowed" });
      break;
  }
}
