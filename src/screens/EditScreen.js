import React, { useContext } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import { Context } from "../contex/BlogContex";

import BlogPostForm from "../components/BlogPostFrom";

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state, editBlogPost } = useContext(Context);
  const blogPost = state.find(blogPost => blogPost.id === id);
  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => {
          navigation.pop();
        });
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
