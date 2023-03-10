﻿// <auto-generated />
using System;
using Magazin_Grafuri.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace MagazinGrafuri.Migrations
{
    [DbContext(typeof(MagazinDbContext))]
    [Migration("20230224161513_Grafice3")]
    partial class Grafice3
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.2")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("Magazin_Grafuri.Tabele.Angajati", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<DateTime>("DataAngajari")
                        .HasColumnType("datetime(6)");

                    b.Property<DateTime>("DataNasterii")
                        .HasColumnType("datetime(6)");

                    b.Property<string>("Nume")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("Oras")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<int>("OreLucratePeSaptamana")
                        .HasColumnType("int");

                    b.Property<int>("OreSuplimentare")
                        .HasColumnType("int");

                    b.Property<string>("Pozitie")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("Prenume")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<int>("Salariu")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.ToTable("Angajati");
                });

            modelBuilder.Entity("Magazin_Grafuri.Tabele.Dashboard", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("ProduseVanduteAnual")
                        .HasColumnType("int");

                    b.Property<int>("ProduseVanduteLunar")
                        .HasColumnType("int");

                    b.Property<int>("Tranzactie")
                        .HasColumnType("int");

                    b.Property<int>("VenitAnual")
                        .HasColumnType("int");

                    b.Property<int>("VenitLunar")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.ToTable("Dashboard");
                });

            modelBuilder.Entity("Magazin_Grafuri.Tabele.Grafic1", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("NrDeMagazine")
                        .HasColumnType("int");

                    b.Property<int>("NrDeMasini")
                        .HasColumnType("int");

                    b.Property<int>("NrTotalDeAngajati")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Grafic1");
                });

            modelBuilder.Entity("Magazin_Grafuri.Tabele.Grafic2", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("ProduseCumparateDinBulgaria")
                        .HasColumnType("int");

                    b.Property<int>("ProduseCumparateDinRomania")
                        .HasColumnType("int");

                    b.Property<int>("ProduseVanduteInBulgaria")
                        .HasColumnType("int");

                    b.Property<int>("ProduseVanduteInRomania")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Grafic2");
                });

            modelBuilder.Entity("Magazin_Grafuri.Tabele.Grafic3", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("Profit")
                        .HasColumnType("int");

                    b.Property<int>("SumaMarfa")
                        .HasColumnType("int");

                    b.Property<int>("Zi")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.ToTable("Grafic3");
                });

            modelBuilder.Entity("Magazin_Grafuri.Tabele.Grafic4", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("ClientiMultumiti")
                        .HasColumnType("int");

                    b.Property<int>("ClientiNemultumiti")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.ToTable("Grafic4");
                });

            modelBuilder.Entity("Magazin_Grafuri.Tabele.Grafic5", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("ClientiDinAustria")
                        .HasColumnType("int");

                    b.Property<int>("ClientiDinBulgaria")
                        .HasColumnType("int");

                    b.Property<int>("ClientiDinFranta")
                        .HasColumnType("int");

                    b.Property<int>("ClientiDinGermania")
                        .HasColumnType("int");

                    b.Property<int>("ClientiDinRomani")
                        .HasColumnType("int");

                    b.Property<int>("ClientiDinSerbia")
                        .HasColumnType("int");

                    b.Property<int>("ClientiDinUngaria")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.ToTable("Grafic5");
                });

            modelBuilder.Entity("Magazin_Grafuri.Tabele.Grafic6", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("ClientiDinBeograd")
                        .HasColumnType("int");

                    b.Property<int>("ClientiDinBor")
                        .HasColumnType("int");

                    b.Property<int>("ClientiDinBucuresti")
                        .HasColumnType("int");

                    b.Property<int>("ClientiDinCraiova")
                        .HasColumnType("int");

                    b.Property<int>("ClientiDinDrobetaTurnSeverin")
                        .HasColumnType("int");

                    b.Property<int>("ClientiDinKladovo")
                        .HasColumnType("int");

                    b.Property<int>("ClientiDinZajecar")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.ToTable("Grafic6");
                });

            modelBuilder.Entity("Magazin_Grafuri.Tabele.Grafic7", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("VanzariPeZi")
                        .HasColumnType("int");

                    b.Property<int>("Zi")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.ToTable("Grafic7");
                });

            modelBuilder.Entity("Magazin_Grafuri.Tabele.Grafic8", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("Vizite")
                        .HasColumnType("int");

                    b.Property<int>("Zi")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.ToTable("Grafic8");
                });

            modelBuilder.Entity("Magazin_Grafuri.Tabele.Produse", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("Cantitate")
                        .HasColumnType("int");

                    b.Property<string>("Nume")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<int>("Pret")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.ToTable("Produse");
                });

            modelBuilder.Entity("Magazin_Grafuri.Tabele.VanzariSaptamanale", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("ProduseVandute")
                        .HasColumnType("int");

                    b.Property<int>("ProfitPeZi")
                        .HasColumnType("int");

                    b.Property<int>("Vanzari")
                        .HasColumnType("int");

                    b.Property<string>("Zi")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.HasKey("ID");

                    b.ToTable("VanzariSaptamanale");
                });

            modelBuilder.Entity("Magazin_Grafuri.Tabele.VanzariTotale", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("An")
                        .HasColumnType("int");

                    b.Property<string>("Luna")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<int>("vanzariTotale")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.ToTable("VanzariToatale");
                });
#pragma warning restore 612, 618
        }
    }
}
