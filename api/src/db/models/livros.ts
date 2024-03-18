import { DataTypes, Model, ModelStatic, Optional } from 'sequelize'
import sequelizeConnection from '../config'

interface LivrosAttributes {
    id: number;
    nome: string;
    autor: string;
    editora: string;
    ano: number;
    isbn: string;
}

export interface LivrosInput extends Optional<LivrosAttributes, 'id'> {}

export interface LivroOutput extends Required<LivrosAttributes> {}

interface Livros {
    id: number;
    nome: string;
    autor: string;
    editora: string;
    ano: number;
    isbn: string;
}

export interface LivrosInput extends Optional<LivrosAttributes, 'id'> {}

export interface LivroOutput extends Required<LivrosAttributes> {}

class Livros extends Model<LivrosAttributes, LivrosInput> implements Livros {
    id!: number
    nome!: string
    editora!: string
    autor!: string;
    ano!: number;
    isbn!: string
}

Livros.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    editora: {
        type: DataTypes.STRING,
        allowNull: false
    },
    autor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ano: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isbn: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: sequelizeConnection,
    paranoid: true
  })

export default Livros