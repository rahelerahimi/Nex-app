import React, { ChangeEvent, ReactNode } from "react";

export interface SwiperData {
  id: number;
  src: string;
  alt: string;
}

export interface Web3Data {
  id: number;
  src: string;
  title: string;
  text: string;
}

export interface MovieData {
  id: number;
  title: string;
  poster: string;
  year: string;
  country: string;
  imdb_rating: string;
  genres: string[];
  images: string[];
  count: number;
  price: number;
}

export interface SubscribeData {
  id: number;
  plan: string;
  price: string;
  text1: string;
  text2: string;
  text3: string;
}

export interface FooterData {
  id: number;
  t1: string;
  t2: string;
  t3: string;
  t4: string;
  t5: string;
  t6?: string;
}

export interface CommentData {
  id: string;
  area: string;
  name: string;
  email: string;
  title?: string;
}
export interface LoveUsData {
  id: number;
  src: string;
  title: string;
  text: string;
}

export interface LayoutData {
  id: number;
  href: string;
  icon: ReactNode;
  text: string;
}

export interface StatusDate {
  id: number;
  src: string;
  text1: string;
  text2: string;
}

export interface BuyRepeat {
  id: number;
  src: string;
  text: string;
  href: string;
}
export interface DiscountContentDate {
  id: number;
  src: string;
  count: number;
  title: string;
  text: string;
}
export interface MyContextType {
  cartData: MovieData[];
  showCart: boolean;
  modalOpen: boolean;
  setModalOpen: (value: boolean) => void;
  openModal: () => void;
  closeModal: () => void;
  addShowCart: (product: MovieData) => void;
  addProducts: (product: MovieData) => void;
  removeProduct: (product: MovieData) => void;
  hideCard: () => void;
  totalProduct: number;
}

export interface DataProps {
  data: MovieData[];
}
export interface MoviesProps {
  params: MovieData;
}

export interface SingleMoviesProps {
  data: MovieData;
}

export interface FilterSearchProps {
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  searchMovies: () => void;
  searchTerm: string;
}

export interface FilterSelectProps {
  handleSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
  sortMovies: (e: ChangeEvent<HTMLInputElement>) => void;
  selectedOption: string;
}

export interface MoviesItemProps {
  paginatedMovies: MovieData[];
}

export interface CommentGetMapProps {
  deleteComment: (id: string, fetchComments: () => void) => void;
  editComment: (
    comment: CommentData,
    formikSetValues: (values: CommentData) => void
  ) => void;
  fetchComments: () => void;
  formiksetvalues: (values: CommentData) => void;
  comments: CommentData[];
  title: string;
}

export interface CommentsListProps {
  comments: CommentData[];
  fetchComments: () => void;
  formiksetvalues: (values: CommentData) => void;
  title: string;
}
