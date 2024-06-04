from rest_framework import serializers
from .models import Product, Category

# Create your serializers here.


class ProductSerializer(serializers.ModelSerializer):
    category = serializers.PrimaryKeyRelatedField(
        queryset=Category.objects.all())

    class Meta:
        model = Product
        fields = ['id', 'name', 'url_image', 'price', 'discount', 'category']


class CategorySerializer(serializers.ModelSerializer):
    products = ProductSerializer(
        many=True, read_only=True)

    class Meta:
        model = Category
        fields = ['id', 'name', 'products']
