# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)-This command accesses an index.
class BlogPostsController < ApplicationController
  def index
    # ---2)-This command is to post the post.
    @posts = BlogPost.all
  end

  def show
    # ---3)-This command shows the post.
    @post = BlogPost.find(params[:id])
  end

  # ---4)-This is a new post command.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)-This is a create command.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6)-This is an edit command.
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)-This is an update command.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)-This command to redirect the path of the code.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)-The private command prevents unauthorized access to the code above this point to people that shouldnt have access
  private
  def blog_post_params
    # ---10)- the pramaters required for a blog_post
    params.require(:blog_post).permit(:title, :content)
  end
end
